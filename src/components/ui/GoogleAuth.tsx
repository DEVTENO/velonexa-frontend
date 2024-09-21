import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const GoogleAuth: React.FC = () => {
  const path = usePathname();
  return (
    <div
      className={
        "container hover:border cursor-pointer hover:border-[#BEBEBE]   flex justify-center items-center   h-[68px]  rounded-md 2xl:mt-10 xl:mt-5"
      }
    >
      <div className=" flex items-center gap-2 ">
        <Image
          src="/icons/google-icon.png"
          alt=""
          width={100}
          height={100}
          className="2xl:size-[30px] xl:size-[20px] size-[30px]"
        />
        <p
          className={
            "text-black 2xl:text-[25px] xl:text-[1.25rem]  font-medium font-poppins"
          }
        >
          Google
        </p>
      </div>
    </div>
  );
};

export default GoogleAuth;
