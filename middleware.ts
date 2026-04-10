import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Request visibility for security monitoring: structured access lines on API routes.
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(
    JSON.stringify({
      severity: "info",
      category: "http_request",
      timestamp: new Date().toISOString(),
      method: request.method,
      path,
    }),
  );
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
