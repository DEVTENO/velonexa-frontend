import { Heart, MessageCircle } from "lucide-react";
import React from "react";

export default function HoverCard(props: {
  countLike: number;
  countComment: number;
}) {
  const { countComment, countLike } = props;
  return (
    <>
      <div className="group-hover:flex hidden absolute bg-black  inset-0 opacity-35 "></div>
      <div
        className={`w-full h-full hidden  group-hover:flex gap-6 justify-center items-center  text-white font-bold z-20 absolute`}
      >
        <div className="flex gap-1">
          <Heart fill="white" />
          {countLike}
        </div>
        <div className="flex gap-1">
          <MessageCircle fill="white" className="-scale-x-100" />
          {countComment}
        </div>
      </div>
    </>
  );
}
