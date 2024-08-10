import HoverCard from "@/components/fragments/hoverCard";
import { OtherUserPost, UserPosts } from "@/lib/types/types";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function UserPost(data: OtherUserPost[] | UserPosts[]) {
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
