import type { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/products')) {
    redirect('/login')
  }
  if (request.nextUrl.pathname.startsWith('/about')) {
    redirect('/login')
  }
}
export const config = {
  matcher: ['/products/:path*', '/about/:path*'],
}