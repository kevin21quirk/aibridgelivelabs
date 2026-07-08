import { NextResponse } from 'next/server';
import { getAllTickets } from '../../../../../lib/db';
import { formatAmount } from '../../../../../lib/ticket';

export const runtime = 'nodejs';

export async function GET() {
  const tickets = await getAllTickets();

  const headers = [
    'Ticket Code',
    'Buyer Name',
    'Email',
    'Amount',
    'Status',
    'Checked In At',
    'Created At',
  ];

  const rows = tickets.map((t) => [
    t.ticket_code,
    t.buyer_name,
    t.buyer_email,
    formatAmount(t.amount_paid, t.currency),
    t.status,
    t.checked_in_at ? new Date(t.checked_in_at).toISOString() : '',
    new Date(t.created_at).toISOString(),
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\r\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="attendees.csv"',
    },
  });
}
