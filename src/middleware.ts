import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
/**
 * Middleware function for Next.js server.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} The response object.
 */

export default async function middleware(
  req: NextRequest
): Promise<NextResponse> {
  const pathname = req.nextUrl.pathname;
  if (pathname == "/setting-profile")
    return NextResponse.rewrite(new URL("/setting-profile/profile", req.url));
  return NextResponse.next();
}

export const config = {
  mathcer: ["/", "/setting-profile/"],
};
