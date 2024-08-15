import { OTHERUSER } from "@/lib/constants/fetchapi";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = params;
  const findUser = OTHERUSER.find((item) => item.username === username);
  if (findUser) {
    return NextResponse.json(findUser);
  } else {
    return NextResponse.json({
      success: false,
      message: "username not found",
    });
  }
}
