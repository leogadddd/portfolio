import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Update the session and get the response (handles auth logic)
  const response = await updateSession(request);

  // If updateSession already returns a redirect, return it immediately
  if (response.status === 302) {
    return response;
  }

  // const response = NextResponse.next(request);

  // Add a new header `x-pathname` which passes the path to downstream components
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - API routes
     * - Static assets (svg, png, jpg, jpeg, gif, webp)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
