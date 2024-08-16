import { UserBookmark } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";

export default function BookmarkCard(props: {
  item: UserBookmark;
  username: string | undefined;
}) {
  const { item, username } = props;
  return (
    <Link
      href={`/${username}/saved/${item.name}/${item.id}`}
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
