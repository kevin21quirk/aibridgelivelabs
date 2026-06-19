import { neon, NeonQueryFunction } from '@neondatabase/serverless';

let _sql: NeonQueryFunction<false, false> | null = null;

function getSql() {
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error('DATABASE_URL is not set');
    }
    _sql = neon(url);
  }
  return _sql;
}

export interface Booking {
  id: number;
  name: string;
  email: string;
  company: string | null;
  stripe_session_id: string;
  stripe_payment_status: string;
  tickets: number;
  created_at: string;
}

export async function getSoldTicketsCount(): Promise<number> {
  const result = await getSql()`
    SELECT COALESCE(SUM(tickets), 0) as count FROM bookings
    WHERE stripe_payment_status = 'paid'
  `;
  return Number((result[0] as { count: number })?.count ?? 0);
}

export async function getTicketsRemaining(): Promise<number> {
  const maxTickets = Number(process.env.NEXT_PUBLIC_MAX_TICKETS ?? 100);
  const sold = await getSoldTicketsCount();
  return Math.max(0, maxTickets - sold);
}

export async function createBooking(
  sessionId: string,
  name: string,
  email: string,
  company: string,
  tickets: number
): Promise<Booking> {
  const result = await getSql()`
    INSERT INTO bookings (stripe_session_id, name, email, company, tickets, stripe_payment_status)
    VALUES (${sessionId}, ${name}, ${email}, ${company}, ${tickets}, 'pending')
    RETURNING *
  `;
  return result[0] as Booking;
}

export async function updateBookingStatus(
  sessionId: string,
  status: string
): Promise<void> {
  await getSql()`
    UPDATE bookings
    SET stripe_payment_status = ${status}
    WHERE stripe_session_id = ${sessionId}
  `;
}

export async function getBookingBySessionId(
  sessionId: string
): Promise<Booking | null> {
  const result = await getSql()`
    SELECT * FROM bookings WHERE stripe_session_id = ${sessionId} LIMIT 1
  `;
  return (result[0] as Booking) ?? null;
}
