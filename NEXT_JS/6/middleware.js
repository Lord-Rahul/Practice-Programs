// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.json({message: "hello from me"})
//   return NextResponse.redirect(new URL('/ ', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/About/:path*',
// }


import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}