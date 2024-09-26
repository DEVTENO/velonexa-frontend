import React from "react";

const AnimasiProses: React.FC = () => {
  return (
    <>
      <span className="flex items-center text-center justify-center">
        <div className="spinner text-center border-4 border-white-500 border-t-4 border-t-transparent rounded-full w-5 h-5 mr-1">
          {" "}
        </div>
        <div className="text-baseline">
          Memproses
          <span className="dots text-[21px]"></span>
        </div>
      </span>
    </>
  );
};

export default AnimasiProses;
