import React from "react";
import { EllipsisVertical, Heart, Share2, Bookmark } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="container relative border-2 border-black ml-52 my-1 flex max-w-[35rem] min-h-lvh">
      <div className="container border-2 border-red-600 flex my-auto min-w-[30rem] min-h-[42rem]">
        <APost />
      </div>
    </div>
  );
};

const APost: React.FC = () => {
  return (
    <div className="container relative flex flex-col border-dashed border-2 border-blue-600 rounded-2xl -ml-2 my-auto min-w-[27.5rem] w-full h-full min-h-[40rem]">
      <div className="top-elem">
        <div className="flex flex-wrap items-center justify-between w-[27.1rem] -ml-8 border-2 border-green-500 rounded-xl">
          <div className="flex flex-wrap items-center gap-2 border-2 border-gray-600 pr-1 rounded-xl">
            <button className="border-2 border-black w-10 h-10 rounded-full"></button>
            <button className="font-bold text-lg">User 1</button>
            <div>•</div>
            <button>10 hours ago</button>
          </div>
          <div className="border-2 border-yellow-500 rounded-lg flex justify-center p-2.5">
            <button>
              <EllipsisVertical size={17} fill="black" />
            </button>
          </div>
        </div>
      </div>
      <div className="image-elem">
        <div className="relative border-2 w-[27.3rem] min-h-[26.5rem] -ml-8 my-3 border-black rounded-2xl">
          <div className="absolute inset-0"></div>
        </div>
      </div>
      <div className="like-share-save">
        <div className="flex flex-wrap justify-between border-2 rounded-md border-purple-600 w-[27.1rem] -ml-8">
          <div className="left-elem px-2 border-2 rounded-md border-green-600 flex items-center">
            <button>
              <Heart />
            </button>
            <button className="ml-5">
              <Share2 />
            </button>
          </div>
          <div className="right-elem px-4 border-2 rounded-md border-green-600 flex items-center">
            <button>
              <Bookmark />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[27.1rem] -ml-7">
        <div>99999 likes</div>
        <div>Ini adalah deskripsi post</div>
        <div className="text-slate-500 text-sm">see 100 comments</div>
      </div>
      <div className="add-comment">
        <form action="">
          <input className="border-2 border-black rounded w-[26.8rem] -ml-7 mt-3 px-1" type="text" placeholder="Comment..." />
        </form>
      </div>
    </div>
  );
};

export default Home;
