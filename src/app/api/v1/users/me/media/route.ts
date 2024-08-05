//http://localhost:{{$PORT}}/api/v1/users/me/media?type=posts

import { FetchApiResponse, UserPosts } from "@/lib/types/types";
import { NextRequest, NextResponse } from "next/server";

const userPost: FetchApiResponse<UserPosts[]> = {
  success: true,
  message: "success",
  data: [
    {
      mediaId: crypto.randomUUID(),
      image: "/user-profile.jpg",
      countLike: 20,
      countComment: 10,
    },
    {
      mediaId: crypto.randomUUID(),
      image: "/user-profile.jpg",
      countLike: 300,
      countComment: 10,
    },
    {
      mediaId: crypto.randomUUID(),
      image: "/user-profile.jpg",
      countLike: 500,
      countComment: 10,
    },
    {
      mediaId: crypto.randomUUID(),
      image: "/user-profile.jpg",
      countLike: 500,
      countComment: 10,
    },
    {
      mediaId: crypto.randomUUID(),
      image: "/user-profile.jpg",
      countLike: 500,
      countComment: 10,
    },
  ],
};
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.get("type");
  if (searchParams == "posts") {
    return NextResponse.json(userPost);
  } else {
    return NextResponse.json({ success: false, message: "Data tidak ada" });
  }
}
