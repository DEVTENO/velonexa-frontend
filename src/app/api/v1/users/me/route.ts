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

const errorResponse: FetchApiResponse<null> = {
  success: false,
  message: "Internal server error",
  error: {
    code: 401,
    message: "Authentication is expired",
    status: "error",
  },
};

export async function GET(request: NextRequest) {
  const isValid = true;
  if (isValid) {
    return NextResponse.json(usersMe, { status: 200 });
  } else {
    return NextResponse.json(errorResponse, { status: 401 });
  }
}
