import { Bookmark } from "lucide-react";

export default function DefaultBookmark() {
  return (
    <div className="w-full h-96  flex flex-col justify-center items-center gap-3">
      <div className="border border-black rounded-full p-5">
        <Bookmark className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Ketika Menyimpan sesuatu, nanti muncul disini
      </div>
    </div>
  );
}
