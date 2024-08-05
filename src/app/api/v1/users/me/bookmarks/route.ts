import { FetchApiResponse, UserBookmark } from "@/lib/types/types";
import { NextResponse } from "next/server";

const DATA_SAVED: FetchApiResponse<UserBookmark[]> = {
  success: true,
  data: [
    {
      id: crypto.randomUUID(),
      name: "all-posts",
      images: [
        "/image4.jpg",
        "/user-profile.jpg",
        "/user-profile.jpg",
        "/image4.jpg",
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "valorant",
      images: [
        "/user-profile.jpg",
        "/image4.jpg",
        "/user-profile.jpg",
        "/image4.jpg",
      ],
    },
  ],
  message: "Success get bookmarks",
};
export async function GET() {
  return NextResponse.json(DATA_SAVED, { status: 200 });
}
