"use client";
import MotionDiv from "@/components/MotionDiv";
import LogoRegister from "@/components/ui/LogoRegister";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import {
  Camera,
  Compass,
  Dot,
  Heart,
  Home,
  Menu,
  MessageCircle,
  Search,
  SquarePlus,
  VideoIcon,
  X,
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
          <SearchComponents key={"search"} isOpenSearch={isOpenSearch} />
          <AnimatePresence>
            <MotionDiv
              key={"sidebars"}
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
              <nav className="px-2  mt-3 flex flex-col  ">
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
            </MotionDiv>
          </AnimatePresence>
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
            className="fixed top-0 left-[4rem] border border-gray-100 shadow-card bg-white rounded-e-xl w-[25rem] h-screen z-[99]"
          >
            <header className="px-4 ">
              <div className="font-semibold text-2xl w-full pl-5 mt-5">
                Cari
              </div>
              <div className="w-full  bg-neutral-200 rounded-lg  text-slate-200 pr-2 pl-4 py-2 mt-10 flex items-center">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-black placeholder:text-black placeholder:font-light"
                  placeholder="Cari"
                />
                <button>
                  <X color="black" size={15} />
                </button>
              </div>
            </header>
            <hr className="mt-6" />
            <main className=" mt-5 h-full overflow-y-scroll ">
              <section className="w-full flex justify-between text-md mb-5 pr-7 pl-8  ">
                <h1 className="font-semibold">Terbaru</h1>
                <button className="text-blue-400 hover:text-blue-600 text-sm font-semibold">
                  Hapus Semua
                </button>
              </section>
              <Link
                href={`/user-1`}
                className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
              >
                <Image
                  alt="photo-profile"
                  src={"/user-profile.jpg"}
                  width={500}
                  height={500}
                  className="size-12 rounded-full"
                />
                <div className="text-sm flex-1">
                  <h1 className="font-semibold">user-1</h1>
                  <p className="font-light text-black flex items-center">
                    User Biasa
                    <Dot color="gray" />
                    <span>Mengikuti</span>
                  </p>
                </div>
                <button>
                  <X />
                </button>
              </Link>
              <Link
                href={`/user-1`}
                className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
              >
                <Image
                  alt="photo-profile"
                  src={"/user-profile.jpg"}
                  width={500}
                  height={500}
                  className="size-12 rounded-full"
                />
                <div className="text-sm flex-1">
                  <h1 className="font-semibold">user-1</h1>
                  <p className="font-light text-black flex items-center">
                    User Biasa
                    <Dot color="gray" />
                    <span>Mengikuti</span>
                  </p>
                </div>
                <button>
                  <X />
                </button>
              </Link>
              <Link
                href={`/user-1`}
                className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
              >
                <Image
                  alt="photo-profile"
                  src={"/user-profile.jpg"}
                  width={500}
                  height={500}
                  className="size-12 rounded-full"
                />
                <div className="text-sm flex-1">
                  <h1 className="font-semibold">user-1</h1>
                  <p className="font-light text-black flex items-center">
                    User Biasa
                    <Dot color="gray" />
                    <span>Mengikuti</span>
                  </p>
                </div>
                <button>
                  <X />
                </button>
              </Link>
            </main>
          </MotionDiv>
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
    <AnimatePresence>
      <MotionDiv
        key={"Navigation"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ bounce: 0, duration: 0 }}
      >
        <Link
          onClick={onClick}
          href={href}
          ref={ref}
          className={`xl:flex hidden hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14   ${
            isOpen ? "px-3" : "px-4"
          } items-center gap-5`}
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
      </MotionDiv>
    </AnimatePresence>
  );
};
