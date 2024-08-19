import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FacebookAuth: React.FC = () => {
  const path = usePathname();
  return (
    <div
      className={
        path == "/register"
          ? "container hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-md mt-[16px]"
          : "container hover:bg-[#fff]  w-[17rem] h-[34px] rounded-md mt-[16px]"
      }
    >
      <div className="flex ml-[23px] cursor-pointer">
        <div className="mt-2 flex">
          {path === "/register" ? (
            <Image
              src="../../../icons/Facebook.svg"
              alt=""
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="../../../icons/FacebookLogin.svg"
              alt=""
              width={22}
              height={22}
            />
          )}

          <p
            className={
              path === "/register"
                ? "text-white top-8 text-sm px-2 font-bold"
                : "text-[#385185] top-8 text-sm px-2 font-bold"
            }
          >
            Log in with Facebook
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacebookAuth;
