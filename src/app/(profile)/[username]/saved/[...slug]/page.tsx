import HoverCard from "@/components/fragments/hoverCard";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (bookmarkId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/users/me/bookmarks/${bookmarkId}`,
    {
      cache: "no-store",
    }
  );
  const response = await res.json();
  return response;
};
const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = getData(slug[1]) ?? [];
  console.log(slug);
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
            Kamu tidak menyimpan apapun di sini
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
