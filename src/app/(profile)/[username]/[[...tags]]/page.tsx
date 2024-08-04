"use server";
import { Bookmark, Camera, UserSquare } from "lucide-react";
import Cookies from "js-cookie";
import { FetchApiResponse, OtherUserPost, UserPost } from "@/lib/types/types";
import HoverCard from "@/components/fragments/hoverCard";
import Image from "next/image";
import Link from "next/link";
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
async function getUserPost(): Promise<FetchApiResponse<UserPost[]>> {
  const res = await fetch(
    `http:localhost:3000/api/v1/users/me/media?type=posts`,
    { cache: "no-store" }
  );
  const response: FetchApiResponse<UserPost[]> = await res.json();
  return response;
}

//
async function getOtherUserPost(
  username: string
): Promise<FetchApiResponse<OtherUserPost[]>> {
  const res = await fetch(
    `http:localhost:3000/api/v1/users/${username}/media?type=posts`,
    {
      cache: "no-store",
    }
  );
  const response: FetchApiResponse<OtherUserPost[]> = await res.json();
  return response;
}

// http://localhost:{{$PORT}}/api/v1/users/me/media - reels
async function getUserReels() {}
// http://localhost:{{$PORT}}/api/v1/users/me/bookmarks
async function getUserBookmark() {}
// http://localhost:{{$PORT}}/api/v1/users/me/media/tagged
async function getUserTagged() {}

const ProfilePage = async ({ params }: ProfileProps) => {
  const { tags, username } = params;
  const token: TokenProps = JSON.parse(
    Cookies.get("token") ?? '{"username": "user-1"}'
  );
  if (token.username === username) {
    if (tags) {
      switch (tags[0]) {
        case "saved":
          return UserSaved();
        case "tagged":
          return UserTagged();
        default:
          break;
      }
    } else {
      const { data } = await getUserPost();
      return UserPost(data);
    }
  } else {
    if (tags) {
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

async function UserPost(data: OtherUserPost[] | UserPost[]) {
  return (
    <div className={`w-full mt-6`}>
      {data.length > 0 ? (
        <div className="w-full max-w-[55rem] gap-1 flex flex-wrap   m-auto ">
          {data.map((item, i) => (
            <Link
              href={`/p/${item.mediaId}`}
              key={item.mediaId}
              className="w-72 h-72  group relative z-10"
            >
              <HoverCard
                countLike={item.countLike}
                countComment={item.countComment}
              />
              <div className="w-full h-full overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src={item.image}
                  className="w-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full h-96 flex flex-col justify-center items-center">
          <div className="border border-black rounded-full p-5">
            <Camera className="" size={50} />
          </div>
          <div className="mt-5 text-sm w-52 text-center">
            Ketika kamu posting sesuatu, nanti muncul disini
          </div>
        </div>
      )}
    </div>
  );
}

async function UserSaved() {
  return (
    <div className="w-full h-96  flex flex-col justify-center items-center gap-3">
      <div className="border border-black rounded-full p-5">
        <Bookmark className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Ketika Menyimpan sesuatu, nanti muncul disini
      </div>
    </div>
  );
}
function UserTagged() {
  return (
    <div className="w-full h-96  flex flex-col justify-center items-center gap-3">
      <div className="border border-black rounded-full p-5">
        <UserSquare className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Ketika orang menandai anda di foto, foto itu nanti muncul disini
      </div>
    </div>
  );
}

function UserReels() {
  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      <div className="border border-black rounded-full p-5">
        <Camera className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Akun ini belum memiliki reels sama sekali.
      </div>
    </div>
  );
}

export default ProfilePage;
