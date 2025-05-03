import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || request.headers.get("Authorization")?.split(" ")[1] || null;
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.startsWith("/code-gen") || path.startsWith("/pic-site");

  if (isProtectedRoute && !token) {
    NextResponse.redirect(new URL("/auth/login", request.url));
  }
  NextResponse.next();
}
 
export const config = {
  matcher: [
    
  ]
}