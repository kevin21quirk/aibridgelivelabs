import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import {
  isStripeEventProcessed,
  recordStripeEvent,
  createTicket,
  getTicketBySessionId,
  markTicketRefundedByPaymentIntent,
} from '../../../../lib/db';
import { generateSecureToken } from '../../../../lib/ticket';
import { sendTicketEmail } from '../../../../lib/email';

export const runtime = 'nodejs';

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY not set');
  return new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('STRIPE_WEBHOOK_SECRET is not set');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Idempotency — ignore events already processed
  if (await isStripeEventProcessed(event.id)) {
    return NextResponse.json({ received: true, skipped: true });
  }

  // Record the event first so concurrent deliveries are deduplicated
  await recordStripeEvent(event.id, event.type);

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case 'charge.refunded':
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;
    }
  } catch (err) {
    console.error(`Error handling ${event.type}:`, err);
    // Return 500 so Stripe retries — but only for unexpected errors
    return NextResponse.json({ error: 'Handler error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  // Deduplicate in case of concurrent delivery (belt-and-suspenders)
  const existing = await getTicketBySessionId(session.id);
  if (existing) return;

  const buyerEmail = session.customer_details?.email ?? '';
  const buyerName = session.customer_details?.name ?? 'Valued Guest';

  if (!buyerEmail) {
    console.error('No buyer email in session', session.id);
    return;
  }

  const ticket = await createTicket({
    secureToken: generateSecureToken(),
    eventId: 1,
    buyerName,
    buyerEmail,
    stripeSessionId: session.id,
    stripePaymentIntentId:
      typeof session.payment_intent === 'string' ? session.payment_intent : null,
    amountPaid: session.amount_total ?? 1000,
    currency: session.currency ?? 'gbp',
  });

  // Send email — non-fatal: ticket is created even if email fails
  try {
    await sendTicketEmail(ticket);
  } catch (emailErr) {
    console.error('Ticket email failed for', ticket.ticket_code, emailErr);
  }
}

async function handleChargeRefunded(charge: Stripe.Charge) {
  const paymentIntentId =
    typeof charge.payment_intent === 'string' ? charge.payment_intent : null;
  if (!paymentIntentId) return;
  await markTicketRefundedByPaymentIntent(paymentIntentId);
}
