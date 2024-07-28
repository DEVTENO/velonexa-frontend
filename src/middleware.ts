import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware function for Next.js server.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} The response object.
 */
export default async function middleware(
  req: NextRequest
): Promise<NextResponse> {
  return NextResponse.next();
}

export const config = {
  mathcer: ["/"],
};
