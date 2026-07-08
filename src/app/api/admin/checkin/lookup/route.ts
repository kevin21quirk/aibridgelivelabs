import { NextRequest, NextResponse } from 'next/server';
import { getTicketByCode } from '../../../../../lib/db';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code') ?? '';
  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 });
  }

  const ticket = await getTicketByCode(code);
  if (!ticket) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ token: ticket.secure_token });
}
