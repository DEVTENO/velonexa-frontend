import { MAX_COUNT } from "@/lib/constants/constants";
import { Heart, MessageCircle } from "lucide-react";

export default function HoverCard(props: {
  countLike?: number;
  countComment?: number;
}) {
  const { countComment = 0, countLike = 0 } = props;
  return (
    <>
      <div className="group-hover:flex hidden absolute bg-black  inset-0 opacity-35"></div>
      <div
        className={`w-full h-full hidden  group-hover:flex gap-6 justify-center items-center  text-white font-bold z-20 absolute`}
      >
        <div className="flex gap-1">
          <Heart fill="white" />
          {countLike >= MAX_COUNT
            ? `${countLike.toString().slice(0, 2)}` +
              `,${countLike.toString().slice(3, 4)} rb`
            : countLike}
        </div>
        <div className="flex gap-1">
          <MessageCircle fill="white" className="-scale-x-100" />
          {countComment >= MAX_COUNT
            ? countComment.toString().slice(0, 2) +
              `, ${countComment.toString().slice(3, 4)} rb`
            : countComment}
        </div>
      </div>
    </>
  );
}
