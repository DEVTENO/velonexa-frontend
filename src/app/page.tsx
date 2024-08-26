import React from "react";
import { EllipsisVertical, Heart, Share2, Bookmark } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="container relative border-2 border-black mx-1 my-1 flex flex-col w-[40rem] min-h-lvh">
      <APost />
    </div>
  );
};

const APost: React.FC = () => {
  return (
    <div className="relative h-full w-full border-2 border-black my-2 min-h-[96vh]">
      <div className="top-elem">
        <div className="flex flex-wrap items-center mx-2 mt-2 justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button className="border-2 border-black w-10 h-10 rounded-full"></button>
            <button className="font-bold text-lg">User 1</button>
            <div>•</div>
            <button>10 hours ago</button>
          </div>
          <button>
            <EllipsisVertical />
          </button>
        </div>
      </div>
      <div className="image-elem">
        <div className="relative border-2 my-2 mx-3 h-[27rem] border-black rounded">
          <div className="absolute inset-0"></div>
        </div>
      </div>
      <div className="like-share-save">
        <div className="flex flex-wrap mx-5 justify-between">
          <div className="left-elem">
            <button>
              <Heart />
            </button>
            <button className="ml-3">
              <Share2 />
            </button>
          </div>
          <div className="right-elem">
            <button>
              <Bookmark />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 mx-5">
        <div>99999 likes</div>
        <div>Ini adalah deskripsi post</div>
        <div className="text-slate-500 text-sm">see 100 comments</div>
      </div>
      <div className="add-comment">
        <form action="">
          <input className="mx-5 my-4 px-1 w-[33rem] h-9 border-2 border-black rounded" type="text" placeholder="Comment..." />
        </form>
      </div>
    </div>
  );
};

export default Home;
