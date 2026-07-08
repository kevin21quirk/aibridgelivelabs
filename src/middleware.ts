import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip the login page itself
  if (pathname === '/admin/login') return NextResponse.next();

  const adminToken = request.cookies.get('admin_token')?.value;
  const validToken = process.env.ADMIN_TOKEN;

  if (!validToken || adminToken !== validToken) {
    // API routes — return 401 JSON
    if (pathname.startsWith('/api/admin')) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Pages — redirect to login, preserving the intended destination
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
