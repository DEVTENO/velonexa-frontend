"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  const route = pathname;

  switch (route) {
    case "/setting-profile/profile":
      return <div className="mt-[7.5rem] border border-black">Profile</div>;
  }
}
