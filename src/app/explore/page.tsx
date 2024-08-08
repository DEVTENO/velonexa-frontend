"use client";

import React, { useState } from "react";
import "../explorePage.css";

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
    <section className="container relative grid grid-cols-3 gap-1 auto-rows-fr w-[81%] h-[80rem] my-6">
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
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`relative overflow-hidden cursor-pointer ${isLarge ? "large-display" : ""}`}>
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10 flex flex-wrap gap-x-2 items-center justify-center font-bold text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
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
