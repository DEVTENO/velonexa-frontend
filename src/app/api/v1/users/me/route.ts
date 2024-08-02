import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import { NextResponse } from "next/server";

const usersMe: FetchApiResponse<UserProfile> = {
  success: true,
  data: {
    username: "user-1",
    name: "Azuki Orange",
    isVerify: true,
    profileImage: "/user-profile.jpg",
  },
};
export async function GET() {
  return NextResponse.json(usersMe);
}
