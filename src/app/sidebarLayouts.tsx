"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const ignorePath = ["/login", "/register"];
export default function SidebarLayouts() {
  const pathname = usePathname();
  return (
    <>
      {!ignorePath.includes(pathname) && (
        <section
          className={cn(
            "sticky top-0  h-screen xl:basis-1/5 sm:w-[4.5rem] ",
            "bg-white dark:bg-black border border-gray-400"
          )}
        ></section>
      )}
    </>
  );
}
