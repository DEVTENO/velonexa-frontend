"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarButtons: React.FC = () => {
  const pathname = usePathname();

  return (
    <Link href="/setting-profile/profile">
      <button className={`w-[13rem] h-[3.188rem] font-normal text-[0.938rem] rounded-[0.563rem] border border-black m-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${pathname === "/setting-profile/profile" ? "active-link" : ""}`}>
        Profile
      </button>
    </Link>
  );
};

export default NavbarButtons;
