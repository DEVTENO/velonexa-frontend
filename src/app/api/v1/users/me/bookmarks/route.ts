import { DATA_BOOKMARK } from "@/lib/constants/fetchapi";
import { FetchApiResponse, UserBookmark } from "@/lib/types/types";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(DATA_BOOKMARK, { status: 200 });
}
