"use client";
import useSWR from "swr";
import MotionDiv from "@/components/MotionDiv";
import { cn, fetcher } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import {
  Compass,
  Heart,
  Home,
  MessageCircle,
  Search,
  Verified,
  VideoIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import SearchComponents from "@/components/fragments/SearchComponents";

const ignorePath = [
  "/login",
  "/register",
  "/auth/login",
  "/auth/register",
  "/auth/test",
  "/auth/belajar",
];
export default function SidebarLayouts({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);
  const isAuthRoute = ignorePath.includes(pathname);
  const { data, error, isLoading } = useSWR<
    FetchApiResponse<UserProfile>,
    FetchApiResponse<null>
  >("/api/v1/users/me", fetcher);
  const handleSearchNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/direct/inbox") {
      setIsOpen(true);
      setIsOpenSearch((x) => !x);
      setIsOpenNotification(false);
    } else {
      if (isOpenNotification && isOpen) {
        setIsOpenNotification(false);
        setIsOpenSearch(true);
        setIsOpen(true);
      } else {
        setIsOpenSearch((x) => !x);
        setIsOpen((x) => !x);
      }
    }
  };
  const handleNotificationNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/direct/inbox") {
      setIsOpen(true);
      setIsOpenNotification(true);
      setIsOpenSearch(false);
    } else {
      if (isOpenSearch && isOpen) {
        setIsOpenNotification(true);
        setIsOpenSearch(false);
        setIsOpen(true);
      } else {
        setIsOpenNotification((x) => !x);
        setIsOpen((x) => !x);
      }
    }
  };
  const handleIsOpenFalse = () => {
    setIsOpen(false);
    setIsOpenNotification(false);
    setIsOpenSearch(false);
  };

  const handleCloseOutside = () => {
    if (pathname === "/direct/inbox") {
      setIsOpenNotification(false);
      setIsOpenSearch(false);
    } else {
      setIsOpenNotification(false);
      setIsOpenSearch(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      {isAuthRoute ? (
        <main>{children}</main>
      ) : (
        <main className="w-full flex font-poppins    ">
          <SearchComponents key={"search"} isOpenSearch={isOpenSearch} />
          <MotionDiv
            key={"sidebars"}
            className={cn(
              pathname === "/direct/inbox" || isOpen
                ? "w-[4.5rem] 2xl:w-[129px]"
                : "xl:w-60 2xl:w-[368px]  w-[4.5rem]",
              "fixed top-0 h-screen  overflow-hidden ",
              "bg-white dark:bg-black border border-gray-400",
              "transition-all"
            )}
          >
            <LogoProfile data={data} isOpen={isOpen} />
            <nav className="px-2  mt-5 2xl:mt-20 flex flex-col  ">
              <NavText
                href="/"
                text="Home"
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                fontWeight={pathname === "/" && "font-bold"}
                icon={<Home className="2xl:size-[32px]" />}
              />
              <NavText
                isOpen={isOpen}
                onClick={(e) => handleSearchNavigation(e)}
                href={`${pathname}/#`}
                text="Search"
                icon={<Search className="2xl:size-[32px]" />}
              />
              <NavText
                isOpen={isOpen}
                onClick={() => setIsOpen(true)}
                href="/direct/inbox"
                fontWeight={pathname === "/direct/inbox" && "font-bold"}
                text="Message"
                icon={<MessageCircle className="2xl:size-[32px]" />}
              />
              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/explore"
                text="Explore"
                fontWeight={pathname === "/explore" && "font-bold"}
                icon={<Compass className="2xl:size-[32px]" />}
              />
              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/reels"
                text="Reels"
                fontWeight={pathname === "/reels" && "font-bold"}
                icon={<VideoIcon className="2xl:size-[32px]" />}
              />

              <NavText
                isOpen={isOpen}
                onClick={(e) => handleNotificationNavigation(e)}
                href={`${pathname}/#`}
                text="Notification"
                icon={<Heart className="2xl:size-[32px]" />}
              />
            </nav>
            {isOpen ? null : (
              <div className="px-2">
                <button className="w-full bg-red-500 text-white py-2">
                  Log out
                </button>
              </div>
            )}
          </MotionDiv>
          <section
            className="w-full xl:ml-60 md:ml-20 "
            onClick={handleCloseOutside}
          >
            {children}
          </section>
        </main>
      )}
    </>
  );
}

type NavTextProps = {
  href: string;
  text?: string;
  icon?: ReactNode;
  fontWeight?: string | boolean;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  ref?: React.RefObject<HTMLAnchorElement>;
};

const NavText = (props: NavTextProps) => {
  const { href, text, icon, fontWeight, onClick, isOpen, ref } = props;
  return (
    <AnimatePresence>
      <MotionDiv
        key={"Navigation"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ bounce: 0, duration: 0 }}
      >
        {/* desktop */}
        <Link
          onClick={onClick}
          href={href}
          ref={ref}
          className={`xl:flex hidden hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14   ${
            isOpen ? "px-3 2xl:justify-center 2xl:w-14 m-auto " : "px-4"
          } items-center gap-5`}
        >
          {icon}
          {isOpen ? null : text}
        </Link>
        {/* mobbile */}
        <Link
          onClick={onClick}
          href={href}
          ref={ref}
          className={`xl:hidden  hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14 flex justify-start px-4 items-center gap-5`}
        >
          {icon}
        </Link>
      </MotionDiv>
    </AnimatePresence>
  );
};

const LogoProfile = ({
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
