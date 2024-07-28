import Link from "next/link";
import React from "react";

export default function NavigationProfile({ username }: { username: string }) {
  return (
    <div className="w-full px-20  relative">
      <Divider />
      <div className="w-full flex justify-center gap-10 mt-5">
        <Link href={`/${username}`}>Postingan</Link>
        <Link href={`/${username}/saved`}>Tersimpan</Link>
        <Link href={`/${username}/tagged`}>Ditandai</Link>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="w-full h-[1px] bg-gray-300" />;
}
