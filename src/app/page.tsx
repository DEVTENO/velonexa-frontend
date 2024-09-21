"use client";
import { useState } from "react";
import React from "react";
import { EllipsisVertical, Heart, Share2, Bookmark } from "lucide-react";

type Item = {
  id: number;
  userName: string;
  timeStamp: number;
  totalLike: number;
  totalComment: number;
};

const Home: React.FC = () => {
  return <div>dskl</div>;
};

const APost: React.FC<Item> = ({
  userName,
  timeStamp,
  totalLike,
  totalComment,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="container border-2 border-black rounded-2xl flex my-7 min-w-[30rem] min-h-[42rem]">
      <div className="container relative flex flex-col border-dashed -ml-2 my-auto min-w-[27.5rem] w-full h-full min-h-[40rem]">
        <div className="top-elem">
          <div className="flex flex-wrap items-center justify-between w-[27.1rem] -ml-8">
            <div className="flex flex-wrap items-center gap-2 pr-1">
              <button className="border-2 border-black w-10 h-10 rounded-full"></button>
              <button className="font-bold text-lg">{userName}</button>
              <div>•</div>
              <button>{timeStamp} hours ago</button>
            </div>
            <div className="flex justify-center p-2.5">
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
          <div className="flex flex-wrap justify-between w-[27.1rem] -ml-8">
            <div className="left-elem px-2 flex items-center">
              <button onClick={() => setIsLiked(!isLiked)}>
                <Heart
                  className={`${
                    isLiked
                      ? "fill-red-500 text-red-500 hover:text-red-500"
                      : "hover:text-gray-500"
                  }`}
                />
              </button>
              <button className="ml-5">
                <Share2 className="hover:text-gray-500" />
              </button>
            </div>
            <div className="right-elem px-4 flex items-center">
              <button onClick={() => setIsSaved(!isSaved)}>
                <Bookmark
                  className={`${
                    isSaved
                      ? "fill-black text-black hover:text-black"
                      : "hover:text-gray-500"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[27.1rem] -ml-6 mt-2">
          <div>{totalLike} likes</div>
          <div>Ini adalah deskripsi post</div>
          <div className="text-slate-500 text-sm cursor-pointer">
            see {totalComment} comments
          </div>
        </div>
        <div className="add-comment">
          <form action="">
            {/* <input className="border-2 border-black rounded w-[25.4rem] -ml-6 mt-3 px-1" type="text" placeholder="Comment..." /> */}
            <textarea
              rows={1}
              className="overflow-y-auto border-2 border-black rounded w-[25.4rem] -ml-6 mt-3 p-1 max-h-24"
              placeholder="Comment..."
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
