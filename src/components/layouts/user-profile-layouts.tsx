"use server";
import { ChevronDown, DotIcon, Verified } from "lucide-react";
import { FetchApiResponse, UserDetail, UserProfile } from "@/lib/types/types";
import Cookies from "js-cookie";
import { userDetail } from "@/lib/constants/fetchapi";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SettingIconWithModal from "../fragments/setting-with-modal";
import { Button } from "../ui/button";
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
  let token = Cookies.get("access-token") ?? "";
  let jwt = {
    username: "user-1",
  };
  const { data, success } = userDetail;
  // Temukan User Yang sedang DIcari
  const findUser = data.filter((item) => item.username == username) ?? [];
  if (!findUser[0]) {
    return (
      <div className="w-full text-center mt-10">
        <h1>Maaf data tidak ditemukan</h1>
      </div>
    );
  }
  // kalau User yang dicari ada dan itu User current
  if (jwt.username == username) {
    return UserProfileCurrent(findUser[0]);
  }

  // kalau user nya ada dan bukan user current
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
        <div className="flex gap-2 items-center  ">
          <h3 className="text-lg me-4  mt-2 flex gap-2 ">
            {findUser[0].username}{" "}
            <span>
              {findUser[0].isVerify ? (
                <Verified color="white " fill="blue" />
              ) : null}
            </span>
          </h3>
          <Button className="  bg-gray-light hover:bg-gray-300 rounded-md text-black font-medium text-sm flex justify-center items-center gap-1">
            Diikuti
            <ChevronDown size={"1rem"} />
          </Button>
          <Button className="px-3 py-2 bg-gray-light hover:bg-gray-300 rounded-md text-black font-medium text-sm">
            Kirim pesan
          </Button>
          <div className="text-lg font-bold tracking-widest cursor-pointer">
            . . .
          </div>
        </div>
        <div className="flex gap-5 mt-6 text-md">
          <p>
            <span className="font-medium">{findUser[0].countPost}</span> kiriman{" "}
          </p>
          <Link href={`/${findUser[0].username}/followers`}>
            <span className="font-medium">{findUser[0].countFollowers}</span>{" "}
            pengikut{" "}
          </Link>
          <Link href={`/${findUser[0].username}/following`}>
            <span className="font-medium">{findUser[0].countFollowing}</span>{" "}
            diikuti{" "}
          </Link>
        </div>
        <p className="mt-5 font-medium">{findUser[0].name}</p>
        <p className="mt-5 text-sm">{findUser[0].bio}</p>
      </section>
    </main>
  );
}

function UserProfileCurrent(data: UserDetail) {
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
        <div className="flex gap-2 items-center  ">
          <h3 className="text-lg me-4  mt-2 flex gap-2 ">
            {data.username}{" "}
            <span>
              {data.isVerify ? <Verified color="white " fill="blue" /> : null}
            </span>
          </h3>
          <Link
            href={"/accounts/edit"}
            className="px-3 py-2 bg-gray-light hover:bg-gray-300 rounded-md text-black font-medium text-sm"
          >
            Edit Profile
          </Link>
          <Link
            href={"/archive/stories"}
            className="px-3 py-2 bg-gray-light hover:bg-gray-300 rounded-md text-black font-medium text-sm"
          >
            Lihat Arsip
          </Link>
          <SettingIconWithModal />
        </div>
        <div className="flex gap-5 mt-6 text-md">
          <p>
            <span className="font-medium">{data.countPost}</span> kiriman{" "}
          </p>
          <Link href={`/${data.username}/followers`}>
            <span className="font-medium">{data.countFollowers}</span> pengikut{" "}
          </Link>
          <Link href={`/${data.username}/following`}>
            <span className="font-medium">{data.countFollowing}</span> diikuti{" "}
          </Link>
        </div>
        <p className="mt-5 font-medium">{data.name}</p>
        <p className="mt-5 text-sm">{data.bio}</p>
      </section>
    </main>
  );
}
