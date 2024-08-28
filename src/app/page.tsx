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
  const items: Item[] = [
    { id: 1, userName: "User 1", timeStamp: 10, totalLike: 15, totalComment: 102 },
    { id: 2, userName: "User 2", timeStamp: 11, totalLike: 18, totalComment: 55 },
  ];

  return (
    <div className="container relative border-2 border-black rounded-xl ml-52 my-1 flex flex-col max-w-[35rem] min-h-lvh">
      {items.map(({ id, userName, timeStamp, totalLike, totalComment }) => (
        <APost id={id} userName={userName} timeStamp={timeStamp} totalLike={totalLike} totalComment={totalComment} />
      ))}
    </div>
  );
};

const APost: React.FC<Item> = ({ userName, timeStamp, totalLike, totalComment }) => {
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
              <button>
                <Heart />
              </button>
              <button className="ml-5">
                <Share2 />
              </button>
            </div>
            <div className="right-elem px-4 flex items-center">
              <button>
                <Bookmark />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[27.1rem] -ml-6 mt-2">
          <div>{totalLike} likes</div>
          <div>Ini adalah deskripsi post</div>
          <div className="text-slate-500 text-sm">see {totalComment} comments</div>
        </div>
        <div className="add-comment">
          <form action="">
            <input className="border-2 border-black rounded w-[25.4rem] -ml-6 mt-3 px-1" type="text" placeholder="Comment..." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
