"use server";
import Cookies from "js-cookie";
import { FetchApiResponse, OtherUserPost, UserPosts } from "@/lib/types/types";
import { notFound } from "next/navigation";
import UserSaved from "./UserSaved";
import UserTagged from "./UserTagged";
import UserReels from "./UserReels";
import UserPost from "./UserPost";
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
  if (tags) {
    if (token.username == username) {
      switch (tags[0]) {
        case "saved":
          return UserSaved(username);
        case "tagged":
          return UserTagged();
        default:
          break;
      }
    } else {
      switch (tags[0]) {
        case "reels":
          return UserReels();
        case "tagged":
          return UserTagged();
        default:
          break;
      }
    }
  }

  const { data } = await getOtherUserPost(username!);
  return UserPost(data);
};

export default ProfilePage;
