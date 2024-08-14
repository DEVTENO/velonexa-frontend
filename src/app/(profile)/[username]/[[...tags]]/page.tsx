"use server";
import Cookies from "js-cookie";
import { FetchApiResponse, OtherUserPost, UserPosts } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import UserPost from "./userPost";
import { notFound } from "next/navigation";
type ProfileProps = {
  params: {
    tags: string;
    username?: string;
  };
};

type TokenProps = {
  username?: string;
};

// http://localhost:{{$PORT}}/api/v1/users/me/media?type=posts
// async function getUserPost(): Promise<FetchApiResponse<UserPosts[]>> {
//   const res = await fetch(
//     `http:localhost:3000/api/v1/users/me/media?type=posts`,
//     { cache: "no-store" }
//   );
//   const response: FetchApiResponse<UserPosts[]> = await res.json();
//   return response;
// }

async function getOtherUserPost(
  username: string
): Promise<FetchApiResponse<OtherUserPost[]>> {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/users/${username}/media?type=posts`,
    {
      cache: "no-store",
    }
  );
  const response: FetchApiResponse<OtherUserPost[]> = await res.json();
  return response;
}

const ProfilePage = async ({ params }: ProfileProps) => {
  const { tags, username } = params;
  const token: TokenProps = JSON.parse(
    Cookies.get("token") ?? '{"username": "user-1"}'
  );
  // get data user post lain atau yang dicari
  if (tags !== undefined) {
    throw notFound();
  }
  const { data } = await getOtherUserPost(username!);
  return UserPost(data);
};

export default ProfilePage;
