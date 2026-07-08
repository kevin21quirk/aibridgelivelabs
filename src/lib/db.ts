import { neon } from '@neondatabase/serverless';

function getDb() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
  return neon(process.env.DATABASE_URL);
}

export interface Ticket {
  id: number;
  ticket_code: string;
  secure_token: string;
  event_id: number;
  buyer_name: string;
  buyer_email: string;
  stripe_session_id: string;
  stripe_payment_intent_id: string | null;
  amount_paid: number;
  currency: string;
  status: 'valid' | 'cancelled' | 'refunded';
  checked_in_at: string | null;
  checked_in_by: string | null;
  created_at: string;
  updated_at: string;
}

export async function getTicketByToken(token: string): Promise<Ticket | null> {
  const sql = getDb();
  const rows = await sql`SELECT * FROM tickets WHERE secure_token = ${token} LIMIT 1`;
  return (rows[0] as Ticket) ?? null;
}

export async function getTicketByCode(code: string): Promise<Ticket | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM tickets WHERE UPPER(ticket_code) = UPPER(${code}) LIMIT 1
  `;
  return (rows[0] as Ticket) ?? null;
}

export async function getTicketBySessionId(sessionId: string): Promise<Ticket | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM tickets WHERE stripe_session_id = ${sessionId} LIMIT 1
  `;
  return (rows[0] as Ticket) ?? null;
}

export async function createTicket(data: {
  secureToken: string;
  eventId: number;
  buyerName: string;
  buyerEmail: string;
  stripeSessionId: string;
  stripePaymentIntentId: string | null;
  amountPaid: number;
  currency: string;
}): Promise<Ticket> {
  const sql = getDb();
  // ticket_code generated atomically from a PostgreSQL sequence
  const rows = await sql`
    INSERT INTO tickets (
      ticket_code, secure_token, event_id, buyer_name, buyer_email,
      stripe_session_id, stripe_payment_intent_id, amount_paid, currency, status
    ) VALUES (
      'AIBRIDGE-2026-' || LPAD(CAST(nextval('ticket_number_seq') AS TEXT), 6, '0'),
      ${data.secureToken}, ${data.eventId}, ${data.buyerName}, ${data.buyerEmail},
      ${data.stripeSessionId}, ${data.stripePaymentIntentId},
      ${data.amountPaid}, ${data.currency}, 'valid'
    )
    RETURNING *
  `;
  return rows[0] as Ticket;
}

export async function checkInTicket(token: string): Promise<Ticket | null> {
  const sql = getDb();
  const rows = await sql`
    UPDATE tickets
    SET checked_in_at = NOW(), checked_in_by = 'staff', updated_at = NOW()
    WHERE secure_token = ${token}
      AND status = 'valid'
      AND checked_in_at IS NULL
    RETURNING *
  `;
  return (rows[0] as Ticket) ?? null;
}

export async function getAllTickets(): Promise<Ticket[]> {
  const sql = getDb();
  return (await sql`SELECT * FROM tickets ORDER BY created_at DESC`) as Ticket[];
}

export async function markTicketRefundedByPaymentIntent(
  paymentIntentId: string,
): Promise<void> {
  const sql = getDb();
  await sql`
    UPDATE tickets
    SET status = 'refunded', updated_at = NOW()
    WHERE stripe_payment_intent_id = ${paymentIntentId}
  `;
}

export async function isStripeEventProcessed(stripeEventId: string): Promise<boolean> {
  const sql = getDb();
  const rows = await sql`
    SELECT id FROM stripe_events WHERE stripe_event_id = ${stripeEventId} LIMIT 1
  `;
  return rows.length > 0;
}

export async function recordStripeEvent(stripeEventId: string, type: string): Promise<void> {
  const sql = getDb();
  await sql`
    INSERT INTO stripe_events (stripe_event_id, type, processed_at, created_at)
    VALUES (${stripeEventId}, ${type}, NOW(), NOW())
    ON CONFLICT (stripe_event_id) DO NOTHING
  `;
}
