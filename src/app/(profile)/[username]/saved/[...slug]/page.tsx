import HoverCard from "@/components/fragments/hoverCard";
import { FetchApiResponse, UserBookmarkDetail } from "@/lib/types/types";
import { Camera, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const getData = async (bookmarkId: string, username?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/users/me/bookmarks/${bookmarkId}`,
    {
      cache: "no-store",
    }
  );
  const response: FetchApiResponse<UserBookmarkDetail[]> = await res.json();
  if (!response.success) {
    redirect(`/${username}/saved`);
  }
  return response;
};
const Page = async ({
  params,
}: {
  params: { slug: string; username: string };
}) => {
  const { slug, username } = params;
  const { data } = await getData(slug[1], username);
  // console.log(data.length);
  return (
    <div className={`container mt-6 flex flex-col `}>
      <div className="ml-16 space-y-3">
        <Link href={`/${username}/saved`} className="flex ">
          <ChevronLeft />
          Tersimpan
        </Link>
        <h1 className="ml-2 text-xl">{slug[0]}</h1>
      </div>
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
            Kamu tidak menyimpan apapun di sini
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
