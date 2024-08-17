import React from "react";
import Image from "next/image";

const FacebookAuth: React.FC = () => {
  return (
    <div className="container hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-md mt-[16px]">
      <div className="flex ml-[23px] cursor-pointer">
        <div className="mt-2 flex">
          <Image src="../../../icons/Facebook.svg" alt="" width={20} height={20}  />
          <p className="text-white top-8 text-sm px-2 font-bold">
            Log in with Facebook
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacebookAuth;
