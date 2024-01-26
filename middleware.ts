import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // 요청 헤더에서 로그인 여부를 확인할 수 있도록 쿠키에 접근
  const sessionToken = request.cookies.get('next-auth.session-token');
  const requestHeaders = new Headers(request.headers);
  console.log('pathname', request.nextUrl.pathname);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  // 로그인 상태가 아니면 Redirection
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 로그인 상태면 원래 요청한 경로로 이동한다.
  // return NextResponse.next();
  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

//
export const config = {
  matcher: ['/my/:path*', '/user/:path*']
};
