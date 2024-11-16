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
import React, { ReactNode, useEffect, useState } from "react";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";
import SearchComponents from "@/components/fragments/SearchComponents";
import NavLink from "@/components/fragments/NavLink";
import SidebarProfile from "@/components/fragments/sidebarProfile";
import { useMediaQuery } from "@uidotdev/usehooks";
import ButtonDisconnect from "@/components/ui/buttonDisconnect";
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
  const routeMessage = "/direct/inbox";
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);
  const isAuthRoute = ignorePath.includes(pathname);
  const { data } = useSWR<
    FetchApiResponse<UserProfile>,
    FetchApiResponse<null>
  >("/api/v1/users/me", fetcher);
  const handleSearchNavigation = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isOpenNotification && isSidebarOpen) {
      setIsOpenNotification(false);
      setIsOpenSearch(true);
      setIsSidebarOpen(true);
    } else {
      setIsOpenSearch((x) => !x);
      setIsSidebarOpen((x) => !x);
    }
  };
  const handleNotificationNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpenSearch && isSidebarOpen) {
      setIsOpenNotification(true);
      setIsOpenSearch(false);
      setIsSidebarOpen(true);
    } else {
      setIsOpenNotification((x) => !x);
      setIsSidebarOpen((x) => !x);
    }
  };
  const handleIsOpenFalse = () => {
    setIsSidebarOpen(false);
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
      setIsSidebarOpen(false);
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
              isSidebarOpen
                ? `w-[4.5rem] 2xl:w-[129px]`
                : "xl:w-60 2xl:w-[368px]  w-[4.5rem]",
              `fixed top-0 h-screen  overflow-hidden
              bg-white dark:bg-black border border-gray-400
              transition-all z-20`
            )}
          >
            <SidebarProfile data={data} isOpen={isSidebarOpen} />
            <nav className="px-2  mt-5 2xl:mt-20 flex flex-col  ">
              <NavLink
                href="/"
                text="Home"
                isOpen={isSidebarOpen}
                onClick={handleIsOpenFalse}
                fontWeight={pathname === "/" && "font-bold"}
                icon={<Home className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isSidebarOpen}
                onClick={(e) => handleSearchNavigation(e)}
                href={`${pathname}/#`}
                text="Search"
                icon={<Search className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isSidebarOpen}
                onClick={handleIsOpenFalse}
                href="/direct/inbox"
                fontWeight={pathname === "/direct/inbox" && "font-bold"}
                text="Message"
                icon={<MessageCircle className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isSidebarOpen}
                onClick={handleIsOpenFalse}
                href="/explore"
                text="Explore"
                fontWeight={pathname === "/explore" && "font-bold"}
                icon={<Compass className="2xl:size-[32px]" />}
              />
              <NavLink
                isOpen={isSidebarOpen}
                onClick={handleIsOpenFalse}
                href="/reels"
                text="Reels"
                fontWeight={pathname === "/reels" && "font-bold"}
                icon={<VideoIcon className="2xl:size-[32px]" />}
              />

              <NavLink
                isOpen={isSidebarOpen}
                onClick={(e) => handleNotificationNavigation(e)}
                href={`${pathname}/#`}
                text="Notification"
                icon={<Heart className="2xl:size-[32px]" />}
              />
            </nav>
            <ButtonDisconnect isOpen={isSidebarOpen} />
          </MotionDiv>
          <section
            className={cn("w-full 2xl:ml-96 xl:ml-60 md:ml-20 ")}
            onClick={handleCloseOutside}
          >
            {children}
          </section>
        </main>
      )}
    </>
  );
}
