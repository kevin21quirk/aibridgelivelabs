import { NextRequest, NextResponse } from 'next/server';
import { getStripe, TICKET_PRICE_PENCE } from '../../../lib/stripe';
import { getTicketsRemaining, createBooking } from '../../../lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, tickets } = body;

    if (!name || !email || !tickets) {
      return NextResponse.json({ error: 'Name, email, and tickets are required' }, { status: 400 });
    }

    const numTickets = Number(tickets);
    if (numTickets < 1 || numTickets > 5) {
      return NextResponse.json({ error: 'You can purchase between 1 and 5 tickets' }, { status: 400 });
    }

    const remaining = await getTicketsRemaining();
    if (remaining < numTickets) {
      return NextResponse.json(
        { error: remaining === 0 ? 'Sold out' : `Only ${remaining} ticket(s) remaining` },
        { status: 400 }
      );
    }

    const origin = req.headers.get('origin') || 'http://localhost:3000';

    const session = await getStripe().checkout.sessions.create({
      // Omitting payment_method_types lets Stripe show every method you
      // enable in your Stripe Dashboard (cards, Apple Pay, Google Pay, etc.).
      mode: 'payment',
      customer_email: email,
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'AI Bridge Live Labs — Event Ticket',
              description: `${numTickets} ticket${numTickets > 1 ? 's' : ''} for 2nd September 2026`,
            },
            unit_amount: TICKET_PRICE_PENCE,
          },
          quantity: numTickets,
        },
      ],
      metadata: {
        name,
        email,
        company: company || '',
        tickets: String(numTickets),
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancelled`,
    });

    await createBooking(session.id, name, email, company || '', numTickets);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
