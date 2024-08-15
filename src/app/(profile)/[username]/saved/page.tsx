import { JWT } from "@/lib/constants/constants";
import { FetchApiResponse, UserBookmark } from "@/lib/types/types";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function getUserSaved(): Promise<FetchApiResponse<UserBookmark[]>> {
  const res = await fetch("http://localhost:3000/api/v1/users/me/bookmarks", {
    cache: "no-store",
  });
  const response: FetchApiResponse<UserBookmark[]> = await res.json();
  return response;
}
export default async function page(props: { params: { username: string } }) {
  const { username } = props.params;
  if (JWT.username !== username) {
    redirect(`/${username}`);
  }
  const { data } = await getUserSaved();
  return (
    <div className={`w-full mt-6`}>
      {data.length > 0 ? (
        <div className="w-full max-w-[55rem] gap-1 flex flex-wrap   m-auto ">
          {data.map((item, i) => (
            <SavedCard key={item.id} item={item} username={username} />
          ))}
        </div>
      ) : (
        <DefaultSaved />
      )}
    </div>
  );
}

function SavedCard(props: {
  item: UserBookmark;
  username: string | undefined;
}) {
  const { item, username } = props;
  return (
    <Link
      href={
        item.name === "all-posts"
          ? `/${username}/saved/${item.name}`
          : `/${username}/saved/${item.name}/${item.id}`
      }
      className="w-[calc(18rem+1px)] h-[calc(18rem+1px)]  group relative z-10"
    >
      <div className="flex group-hover:hidden absolute bg-black  inset-0 opacity-15  "></div>
      {item.name === "all-posts" ? (
        <div className="w-full h-full flex flex-wrap gap-px  overflow-hidden">
          {item.images.map((image, index) => (
            <Image
              width={200}
              key={index}
              height={200}
              alt=""
              src={image}
              className="w-36 h-36  object-cover"
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-full  overflow-hidden">
          <Image
            width={200}
            height={200}
            alt=""
            src={item.images[item.images.length - 1]}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="absolute bottom-2 left-3 text-white dark:text-white text-lg font-semibold">
        {item.name}
      </div>
    </Link>
  );
}

function DefaultSaved() {
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
