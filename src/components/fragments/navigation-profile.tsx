import {
  Bookmark,
  Grid,
  UserSquare,
  UserSquareIcon,
  Videotape,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavigationProfile({
  username,
  isUserCurrent,
}: {
  username: string;
  isUserCurrent: boolean;
}) {
  return (
    <div className="w-full px-20  relative">
      <Divider />
      <div className="w-full flex justify-center gap-10 mt-5">
        <Link
          className="flex justify-center items-center gap-1"
          href={`/${username}`}
        >
          <Grid size={15} /> Postingan
        </Link>
        {isUserCurrent ? (
          <Link
            className="flex justify-center items-center gap-1"
            href={`/${username}/saved`}
          >
            <Bookmark size={15} />
            Tersimpan
          </Link>
        ) : (
          <Link
            className="flex justify-center items-center gap-1"
            href={`/${username}/saved`}
          >
            <Videotape size={15} />
            Reels
          </Link>
        )}
        <Link
          className="flex justify-center items-center gap-1"
          href={`/${username}/tagged`}
        >
          <UserSquare size={15} /> Ditandai
        </Link>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="w-full h-[1px] bg-gray-300" />;
}
