import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  const envToken = process.env.ADMIN_TOKEN;
  console.log('[admin/login] env token set:', !!envToken, '| env length:', envToken?.length, '| submitted length:', token?.length, '| match:', token === envToken);

  if (!envToken || token !== envToken) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
  return response;
}
