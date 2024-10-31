import { Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionDiv from "../MotionDiv";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import { cn } from "@/lib/utils";

const SidebarProfile = ({
  isOpen,
  data,
}: {
  isOpen: boolean;
  data: FetchApiResponse<UserProfile> | undefined;
}) => {
  return (
    <header>
      <div
        className={cn(
          `hidden xl:flex justify-start items-center w-full  mx-auto`,
          isOpen ? "mt-3 2xl:mt-44 xl:mt-28" : "mt-3 2xl:mt-10"
        )}
      >
        {isOpen ? (
          <Link
            href={"/user-1"}
            className="size-[calc(3rem+7px)] m-auto rounded-full relative overflow-hidden"
          >
            <Image
              src={"/user-profile.jpg"}
              width={900}
              height={900}
              alt="photo profile"
              className="  absolute inset-0"
            />
          </Link>
        ) : (
          <MotionDiv className=" flex flex-col justify-center items-center m-auto  ">
            <Link
              href={"user-1"}
              className={` 2xl:size-[calc(9rem+3px)] size-28 border-[3px] border-[#3971FF]  rounded-full relative overflow-hidden`}
            >
              <Image
                src={"/user-profile.jpg"}
                width={900}
                height={900}
                alt="photo profile"
                className="  absolute inset-0 "
              />
            </Link>
            <main className="font-poppins mt-4 ">
              <span className="flex justify-center items-center text-[calc(1rem+3px)] gap-2  ">
                {data?.data?.username}
                {data?.data?.isVerify ? (
                  <Verified size={20} fill="#3971FF" color="white" />
                ) : null}
              </span>
              <span className=" text-[#A5A5A5]">
                {data?.data?.name ? data?.data?.name : ""}
              </span>
            </main>
          </MotionDiv>
        )}
      </div>
      {/*  mobile responsive start*/}
      <div className="flex xl:hidden w-full h-10 mt-10   mx-auto justify-center items-center">
        <Image
          src={"/user-profile.jpg"}
          width={900}
          height={900}
          alt="photo profile"
          className="  rounded-full size-10 object-cover "
        />
      </div>
      {/*  mobile responsive end */}
    </header>
  );
};

export default SidebarProfile;
