"use client";
import MotionDiv from "@/components/MotionDiv";
import LogoRegister from "@/components/ui/LogoRegister";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import {
  Camera,
  Compass,
  Heart,
  Home,
  Menu,
  MessageCircle,
  Search,
  SquarePlus,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

const ignorePath = ["/login", "/register"];
export default function SidebarLayouts({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);
  const isAuthRoute = ignorePath.includes(pathname);
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

  return (
    <>
      {isAuthRoute ? (
        <main>{children}</main>
      ) : (
        <main className="w-full flex ">
          <SearchComponents isOpenSearch={isOpenSearch} />
          <div
            className={cn(
              pathname === "/direct/inbox" || isOpen
                ? "w-[4.5rem]"
                : "xl:w-60 w-[4.5rem]",
              "fixed top-0 h-screen  overflow-hidden z-[99] ",
              "bg-white dark:bg-black border border-gray-400",
              "transition-all"
            )}
          >
            <header>
              <div className="w-full h-10 mt-10   mx-auto hidden xl:flex justify-start items-center ">
                <AnimatePresence>
                  {isOpen ? (
                    <MotionDiv
                      key={"modalSearchOpen"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ bounce: 0, duration: 0 }}
                      className="m-auto"
                    >
                      <Camera />
                    </MotionDiv>
                  ) : (
                    <MotionDiv
                      key={"modalSearchClose"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ bounce: 0, duration: 0 }}
                      exit={{ opacity: 0 }}
                      className="px-10"
                    >
                      <LogoRegister margin="" fontSize="text-[30px]">
                        Velonexa
                      </LogoRegister>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex xl:hidden w-full h-10 mt-10   mx-auto justify-start items-center">
                <Camera className="m-auto" />
              </div>
            </header>
            <nav className="px-2  mt-3 flex flex-col ">
              <NavText
                href="/"
                text="Home"
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                fontWeight={pathname === "/" && "font-bold"}
                icon={<Home />}
              />
              <NavText
                isOpen={isOpen}
                onClick={(e) => handleSearchNavigation(e)}
                href={`${pathname}/#`}
                text="Search"
                icon={<Search />}
              />
              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/explore"
                text="Explore"
                fontWeight={pathname === "/explore" && "font-bold"}
                icon={<Compass />}
              />
              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/reels"
                text="Reels"
                fontWeight={pathname === "/reels" && "font-bold"}
                icon={<VideoIcon />}
              />
              <NavText
                isOpen={isOpen}
                onClick={() => setIsOpen(true)}
                href="/direct/inbox"
                fontWeight={pathname === "/direct/inbox" && "font-bold"}
                text="Message"
                icon={<MessageCircle />}
              />
              <NavText
                isOpen={isOpen}
                onClick={(e) => handleNotificationNavigation(e)}
                href={`${pathname}/#`}
                text="Notification"
                icon={<Heart />}
              />
              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href={`${pathname}/#`}
                text="Create"
                icon={<SquarePlus />}
              />
              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href={`/user-1`}
                fontWeight={pathname === `/user-1` && "font-bold"}
                text="Profile"
                icon={
                  <Image
                    width={500}
                    height={500}
                    alt="Photo-Profile"
                    src={"/user-profile.jpg"}
                    className="size-7 rounded-full bg-black "
                  />
                }
              />

              <NavText
                isOpen={isOpen}
                onClick={handleIsOpenFalse}
                href="/#"
                text="Lainnya"
                icon={<Menu />}
              />
            </nav>
          </div>
          <section
            className="w-full xl:ml-60 md:ml-20 "
            onClick={() => {
              if (pathname === "/direct/inbox") {
                setIsOpenNotification(false);
                setIsOpenSearch(false);
              } else {
                setIsOpenNotification(false);
                setIsOpenSearch(false);
                setIsOpen(false);
              }
            }}
          >
            {children}
          </section>
        </main>
      )}
    </>
  );
}

const SearchComponents = (props: { isOpenSearch: boolean }) => {
  const { isOpenSearch } = props;
  return (
    <>
      <AnimatePresence>
        {isOpenSearch && (
          <MotionDiv
            animate={{ x: [-500, 0] }}
            exit={{ x: [0, -500] }}
            transition={{ bounce: 0 }}
            className="fixed top-0 left-[4rem] border border-gray-100 shadow-card bg-white rounded-e-xl w-[25rem] h-full z-[99]"
          ></MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

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
    <>
      <Link
        onClick={onClick}
        href={href}
        ref={ref}
        className={`xl:flex hidden hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14  justify-start px-4 items-center gap-5`}
      >
        {icon}
        {isOpen ? null : text}
      </Link>
      <Link
        onClick={onClick}
        href={href}
        ref={ref}
        className={`xl:hidden  hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14 flex justify-start px-4 items-center gap-5`}
      >
        {icon}
      </Link>
    </>
  );
};
