import { JWT } from "@/lib/constants/constants";
import { FetchApiResponse, UserBookmark } from "@/lib/types/types";
import { redirect } from "next/navigation";
import React from "react";
import BookmarkCard from "../saved/BookmarkCard";
import DefaultBookmark from "../saved/DefaultBookmark";

async function getUserSaved(): Promise<FetchApiResponse<UserBookmark[]>> {
  const res = await fetch("http://localhost:3000/api/v1/users/me/bookmarks", {
    cache: "no-store",
  });
  const response: FetchApiResponse<UserBookmark[]> = await res.json();
  return response;
}
export default async function UserSaved(username: string = "") {
  if (JWT.username !== username) {
    redirect(`/${username}`);
  }
  const { data } = await getUserSaved();
  return (
    <div className={`w-full mt-6`}>
      {data.length > 0 ? (
        <div className="w-full max-w-[55rem] gap-1 flex flex-wrap   m-auto ">
          {data?.map((item, i) => (
            <BookmarkCard key={item.id} item={item} username={username} />
          ))}
        </div>
      ) : (
        <DefaultBookmark />
      )}
    </div>
  );
}
