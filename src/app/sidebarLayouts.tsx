"use client";
import useSWR from "swr";
import MotionDiv from "@/components/MotionDiv";
import { cn, fetcher } from "@/lib/utils";
import {
  Compass,
  Heart,
  Home,
  MessageCircle,
  Search,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import SearchComponents from "@/components/fragments/SearchComponents";
import NavLink from "@/components/fragments/NavLink";
import SidebarProfile from "@/components/fragments/sidebarProfile";
import { useMediaQuery } from "@uidotdev/usehooks";
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
            className={cn(
              pathname === "/direct/inbox"
                ? "2xl:w-[368px]  w-[4.5rem] bg-blue-500"
                : "",
              isOpen
                ? "w-[4.5rem] 2xl:w-[129px]"
                : "xl:w-60 2xl:w-[368px]  w-[4.5rem]",
              `fixed top-0 h-screen  overflow-hidden
              bg-white dark:bg-black border border-gray-400
              transition-all z-20`
            )}
          >
            <SidebarProfile data={data} isOpen={isOpen} />
            <nav className="px-2  mt-5 2xl:mt-20 flex flex-col  ">
              <NavLink
                href="/"
                text="Home"
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                fontWeight={pathname === "/" && "font-bold"}
                icon={<Home className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isOpen}
                onClick={(e) => handleSearchNavigation(e)}
                href={`${pathname}/#`}
                text="Search"
                icon={<Search className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isOpen}
                onClick={() => setIsOpen(true)}
                href="/direct/inbox"
                fontWeight={pathname === "/direct/inbox" && "font-bold"}
                text="Message"
                icon={<MessageCircle className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/explore"
                text="Explore"
                fontWeight={pathname === "/explore" && "font-bold"}
                icon={<Compass className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/reels"
                text="Reels"
                fontWeight={pathname === "/reels" && "font-bold"}
                icon={<VideoIcon className="2xl:size-[32px]" />}
              />

              <NavLink
                isOpen={isOpen}
                onClick={(e) => handleNotificationNavigation(e)}
                href={`${pathname}/#`}
                text="Notification"
                icon={<Heart className="2xl:size-[32px]" />}
              />
            </nav>
            <ButtonDisconnect isOpen={isOpen} />
          </MotionDiv>
          <section
            className={cn(
              pathname == "/direct/inbox"
                ? "w-full 2xl:ml-60 xl:ml-[4rem] "
                : "w-full xl:ml-60 md:ml-20 "
            )}
            onClick={handleCloseOutside}
          >
            {children}
          </section>
        </main>
      )}
    </>
  );
}

const ButtonDisconnect = (props: { isOpen: boolean }) => {
  const { isOpen } = props;
  return (
    <>
      {isOpen ? null : (
        <div className="px-2 xl:block hidden">
          <button className="w-full bg-red-500 text-white py-2">Log out</button>
        </div>
      )}
    </>
  );
};
