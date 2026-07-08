import { NextRequest, NextResponse } from 'next/server';
import { checkInTicket, getTicketByToken } from '../../../../../lib/db';

export const runtime = 'nodejs';

export async function POST(
  _request: NextRequest,
  { params }: { params: { token: string } },
) {
  const ticket = await getTicketByToken(params.token);

  if (!ticket) {
    return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
  }
  if (ticket.status !== 'valid') {
    return NextResponse.json(
      { error: `Ticket is ${ticket.status} — entry denied` },
      { status: 409 },
    );
  }
  if (ticket.checked_in_at) {
    return NextResponse.json(
      {
        error: 'Ticket already used',
        checkedInAt: ticket.checked_in_at,
      },
      { status: 409 },
    );
  }

  const updated = await checkInTicket(params.token);
  if (!updated) {
    // Race condition — another request checked it in between our read and update
    return NextResponse.json({ error: 'Ticket already used' }, { status: 409 });
  }

  return NextResponse.json({ success: true, ticket: updated });
}
