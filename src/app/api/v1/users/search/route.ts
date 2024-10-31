import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import { NextRequest, NextResponse } from "next/server";

const dataTemporary: UserProfile[] = [
  {
    isVerify: true,
    name: "Mulyono",
    username: "user-1",
    profileImage: "/user-profile.jpg",
  },
  {
    isVerify: false,
    name: "Fufufafa",
    username: "user-2",
    profileImage: "/user-profile.jpg",
  },
  {
    isVerify: true,
    name: "si bau ketek",
    username: "user-3",
    profileImage: "/user-profile.jpg",
  },
  {
    isVerify: true,
    name: "Gintoki",
    username: "ahmadagung",
    profileImage: "/user-profile.jpg",
  },
];
const dataNotFound: FetchApiResponse<{}> = {
  message: "Search Not Found",
  success: false,
  data: [],
};
export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const username = query.get("username") || "";

  if (username.trim() == "") {
    return NextResponse.json(dataNotFound);
  }
  const searchUser = dataTemporary.filter((item) =>
    item.username.toLowerCase().includes(username.trim().toLowerCase())
  );
  if (searchUser.length > 0) {
    const dataSuccess: FetchApiResponse<UserProfile[]> = {
      message: "Success",
      success: true,
      data: searchUser,
    };
    return NextResponse.json(dataSuccess);
  } else {
    return NextResponse.json(dataNotFound, { status: 404 });
  }
}
