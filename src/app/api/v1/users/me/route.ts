import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import { NextRequest, NextResponse } from "next/server";

const usersMe: FetchApiResponse<UserProfile> = {
  success: true,
  data: {
    username: "user-1",
    name: "Azuki Orange",
    isVerify: true,
    profileImage: "/user-profile.jpg",
  },
  message: "success",
};

export async function GET(request: NextRequest) {
  return NextResponse.json(usersMe);
}
