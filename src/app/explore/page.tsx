"use client";

import React, { useState } from "react";
import "../explorePage.css";
import { MessageCircle } from "lucide-react";

type Item = {
  id: number;
  text: string;
  comment: string;
};

const Explore: React.FC = () => {
  const items: Item[] = [
    { id: 1, text: "1", comment: "16" },
    { id: 2, text: "2", comment: "20" },
    { id: 3, text: "3", comment: "48" },
    { id: 4, text: "4", comment: "29" },
    { id: 5, text: "5", comment: "500" },
    { id: 6, text: "6", comment: "47" },
    { id: 7, text: "7", comment: "12" },
    { id: 8, text: "8", comment: "86" },
    { id: 9, text: "9", comment: "37" },
    { id: 10, text: "10", comment: "5" },
  ];

  return (
    <section className=" container px-12 relative grid grid-cols-3 gap-1   my-6">
      {items.map(({ id, text, comment }) => (
        <ExploreItem key={id} id={id} text={text} comment={comment} />
      ))}
    </section>
  );
};

const ExploreItem: React.FC<Item> = ({ id, text, comment }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLarge = id % 10 === 3 || id % 10 === 6;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden  w-full min-w-[20rem] h-full min-h-[20rem]   cursor-pointer ${isLarge ? "row-span-2 bg-blue-800" : "bg-red-800"}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10 flex flex-wrap gap-x-2 items-center justify-center font-bold text-white">
        <MessageCircle fill="white" />
        <p>{comment}</p>
      </div>
      <div className={`absolute inset-0 flex items-center justify-center text-black ${isHovered ? "z-0" : "z-20"} ${isLarge ? "bg-green-400" : "bg-sky-500"}`}>{text}</div>
    </div>
  );
};

export default Explore;

// return (
//   <>
//     <section className="explore-content">
//       <div className="">
//         <div className="w-full h-full"></div>
//       </div>
//       <div>2</div>
//       <div className="large-display">3</div>
//       <div>4</div>
//       <div>5</div>
//       <div className="large-display">6</div>
//       <div>7</div>
//       <div>8</div>
//       <div>9</div>
//       <div>10</div>
//     </section>
//   </>
// );
