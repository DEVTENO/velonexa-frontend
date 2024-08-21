"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const ignorePath = ["/login", "/register"];

export default function SidebarLayouts({
  children,
}: {
  children: ReactNode;
}) {
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
              "sticky top-0 h-screen xl:w-60 sm:w-[4.5rem]",
              "bg-white dark:bg-black border border-gray-400"
            )}
          ></section>
          <section className="w-full xl:basis-4/5">{children}</section>
        </main>
      )}
    </>
  );
}
