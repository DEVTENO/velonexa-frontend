import React from "react";
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
    <>
      <section className="explore-content">
        {items.map(({ id, text }) => (
          <div key={id} className={`${id % 10 === 3 || id % 10 === 6 ? "large-display" : ""}`}>
            {text}
          </div>
        ))}
      </section>
    </>
  );

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
};

export default Explore;
