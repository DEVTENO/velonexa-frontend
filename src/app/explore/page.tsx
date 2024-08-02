"use client";

import React, { useState } from "react";
import "../explorePage.css";

type Item = {
  id: number;
  text: string;
};

const Explore: React.FC = () => {
  const items: Item[] = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
    { id: 6, text: "6" },
    { id: 7, text: "7" },
    { id: 8, text: "8" },
    { id: 9, text: "9" },
    { id: 10, text: "10" },
  ];

  return (
    <section className="container relative grid grid-cols-3 gap-1 w-[81%] h-[80rem] my-6">
      {items.map(({ id, text }) => (
        <ExploreItem key={id} id={id} text={text} />
      ))}
    </section>
  );
};

const ExploreItem: React.FC<Item> = ({ id, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLarge = id % 10 === 3 || id % 10 === 6;

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`relative overflow-hidden ${isLarge ? "large-display" : ""}`}>
      <div className="absolute inset-0 bg-black opacity-30 z-10 flex items-center justify-center text-white">{text}</div>
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
