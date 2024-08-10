import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { bookmarkId: string } }
) {
  const { bookmarkId } = params;

  return NextResponse.json({
    success: true,
    message: "Data Successfull",
    data: [],
  });
}
