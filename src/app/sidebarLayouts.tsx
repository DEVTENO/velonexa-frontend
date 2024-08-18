"use client";
import LogoRegister from "@/components/ui/LogoRegister";
import { cn } from "@/lib/utils";
import {
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
import React, { ReactNode } from "react";

const ignorePath = ["/login", "/register"];

export default function SidebarLayouts({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = ignorePath.includes(pathname);
  return (
    <>
      {isAuthRoute ? (
        <main>{children}</main>
      ) : (
        <main className="w-full flex">
          <section
            className={cn(
              "sticky top-0  h-screen xl:w-60 sm:w-[4.5rem] overflow-hidden ",
              "bg-white dark:bg-black border border-gray-400"
            )}
          >
            <div className="text-start px-10 ">
              <LogoRegister fontSize="text-[30px]" margin="mt-10">
                Velonexa
              </LogoRegister>
            </div>
            <nav className="px-2  mt-3 flex flex-col ">
              <NavText href="/" text="Home">
                <Home />
              </NavText>
              <NavText href="/#" text="Search">
                <Search />
              </NavText>
              <NavText href="/explore" text="Explore">
                <Compass />
              </NavText>
              <NavText href="/reels" text="Reels">
                <VideoIcon />
              </NavText>
              <NavText href="/direct/inbox" text="Message">
                <MessageCircle />
              </NavText>
              <NavText href="/#" text="Notification">
                <Heart />
              </NavText>
              <NavText href="/#" text="Create">
                <SquarePlus />
              </NavText>
              <NavText href="/#" text="Profile">
                <Image
                  width={500}
                  height={500}
                  alt="Photo-Profile"
                  src={""}
                  className="size-7 rounded-full bg-black "
                />
              </NavText>
              <NavText href="/#" text="Lainnya">
                <Menu />
              </NavText>
            </nav>
          </section>
          <section className="w-full xl:basis-4/5 ">{children}</section>
        </main>
      )}
    </>
  );
}

type NavTextProps = {
  href: string;
  text?: string;
  children?: ReactNode;
};
const NavText = (props: NavTextProps) => {
  const { href, text, children } = props;
  return (
    <Link
      href={href}
      className={`hover:bg-gray-200 rounded-lg w-full h-14 flex justify-start px-4 items-center gap-5`}
    >
      {children}
      {text}
    </Link>
  );
};
