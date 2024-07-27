"use server";
import { Verified } from "lucide-react";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import Cookies from "js-cookie";
import { userDetail } from "@/lib/constants/fetchapi";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type UserProfileLayoutsProps = {
  username: string;
};
async function getDataUserCurrent(): Promise<FetchApiResponse<UserProfile>> {
  const res = await fetch(`${process.env.MOCK_API_URL}/v1/users/me`, {
    method: "GET",
  });
  const response: FetchApiResponse<UserProfile> = await res.json();
  return response;
}
export default async function UserProfileLayouts({
  username,
}: UserProfileLayoutsProps) {
  // Ambil token dari cookies
  let token = Cookies.get("access-token") ?? "";
  // decode menggunakan jwt
  let jwt = {
    username: "user-1",
  };
  // fetch user detail,
  const { data, success } = userDetail;
  // Kalau User yang dicari Ga ada
  if (!success) {
    return UserNotFound();
  }

  // kalau User yang dicari ada dan itu User current
  if (jwt.username == username) {
    return UserProfileCurrent(data);
  }

  // kalau user nya ada dan bukan user current
  return (
    <div>
      <div>Username: {data && data?.username}</div>
      <div>name: {data && data?.name}</div>
      <div>is follow </div>
      {data && data?.isVerify ? <Verified /> : <div></div>}
    </div>
  );
}

function UserNotFound() {
  return (
    <div>
      <h1>Maaf data tidak ditemukan</h1>
    </div>
  );
}

function UserProfileCurrent(data: UserProfile) {
  return (
    <main className={cn("w-full pl-5 py-9", "flex", "ml-auto")}>
      <section className="basis-1/4  flex items-center justify-end ">
        <div className="w-[calc(9rem+12px)] h-[calc(9rem+12px)] rounded-full bg-black overflow-hidden relative flex flex-col justify-center items-center ">
          <Image
            width={200}
            height={200}
            src={"/user-profile.jpg"}
            className="object-cover"
            alt=""
          />
        </div>
      </section>
      <section className="basis-3/4 text-black px-24">
        <div>
          <h3 className="">
            {data.username} <span>{data.isVerify ? <Verified /> : null}</span>
          </h3>
          <Link href={"/accounts/edit"}>Edit Profile</Link>
          <Link href={"/archive/stories"}>Lihat Arsip</Link>
        </div>
      </section>
    </main>
  );
}
