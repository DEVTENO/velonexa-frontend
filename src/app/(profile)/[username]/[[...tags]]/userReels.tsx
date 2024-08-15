import { Camera } from "lucide-react";
import React from "react";

export default function UserReels() {
  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      <div className="border border-black rounded-full p-5">
        <Camera className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Akun ini belum memiliki reels sama sekali.
      </div>
    </div>
  );
}
