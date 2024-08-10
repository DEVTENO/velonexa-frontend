"use client";
import { Bookmark, Grid, UserSquare, Videotape } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
export default function NavigationProfile({
  username,
  isUserCurrent,
}: {
  username: string;
  isUserCurrent: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const pathPost = `/${username}`;
  const pathSaved = `/${username}/saved`;
  const pathTagged = `/${username}/tagged`;
  const pathReels = `/${username}/reels`;
  if (pathname === pathSaved && !isUserCurrent) {
    router.replace(pathPost);
  }
  if (pathname === pathReels && isUserCurrent) {
    router.replace(pathPost);
  }
  return (
    <div className="w-full px-20  relative">
      <Divider />
      <div
        className={cn(
          "absolute bg-black h-px  left-[50%] right-[50%] -translate-x-[11rem] transition-all",
          pathname === pathPost ? "w-20" : "",
          pathname === pathReels ? "w-20" : "",
          pathname === pathSaved || pathname === pathReels
            ? "w-20 -translate-x-[2.6rem]"
            : "",
          pathname === pathTagged ? "translate-x-[6rem] w-[5rem]" : ""
        )}
      />
      <div className="w-full flex justify-center gap-10 mt-5">
        <Link
          className={cn("flex justify-center items-center gap-1")}
          href={pathPost}
        >
          <Grid size={15} /> Postingan
        </Link>
        {isUserCurrent ? (
          <Link
            className="flex justify-center items-center gap-1"
            href={pathSaved}
          >
            <Bookmark size={15} />
            Tersimpan
          </Link>
        ) : (
          <Link
            className="flex justify-center items-center gap-1"
            href={pathReels}
          >
            <Videotape size={15} />
            Reels
          </Link>
        )}
        <Link
          className="flex justify-center items-center gap-2"
          href={pathTagged}
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
