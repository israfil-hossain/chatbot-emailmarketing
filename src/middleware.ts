import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)', '/favicon.ico'],
  ignoredRoutes: ['/chatbot'],
  afterAuth(auth, req) {
    // Track API usage for billing
    if (req.nextUrl.pathname.startsWith('/api/ai/') && auth.userId) {
      // This will be handled in the individual API routes
    }
    
    return NextResponse.next()
  }
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}


// import { NextResponse, type NextRequest } from "next/server";

// export function authMiddleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const isLoggedIn = req.cookies.get("auth-token");

//   if (!isLoggedIn && pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   if (isLoggedIn && pathname === "/auth/login") {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next();
// }
