import { UserSquare } from "lucide-react";
import React from "react";

export default async function UserTagged() {
  return (
    <div className="w-full h-96  flex flex-col justify-center items-center gap-3">
      <div className="border border-black rounded-full p-5">
        <UserSquare className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Ketika orang menandai anda di foto, foto itu nanti muncul disini
      </div>
    </div>
  );
}
