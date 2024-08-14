import React from "react";

const Loading = () => {
  return (
    <div className="w-full justify-center flex mt-5">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
};

export default Loading;
