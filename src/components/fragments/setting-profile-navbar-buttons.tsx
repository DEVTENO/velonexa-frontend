"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarButtons: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <Link href="/setting-profile/profile" scroll={false}>
        <button
          className={`w-[13rem] h-[3.188rem] font-normal text-settingProfileNavbar text-[0.938rem] rounded-[0.563rem] m-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${
            pathname === "/setting-profile/profile" ? "active-link" : ""
          }`}
        >
          Profile
        </button>
      </Link>
      <Link href="/setting-profile/account" scroll={false}>
        <button
          className={`w-[13rem] h-[3.188rem] font-normal text-settingProfileNavbar text-[0.938rem] rounded-[0.563rem] mx-[0.625rem] mb-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${
            pathname === "/setting-profile/account" ? "active-link" : ""
          }`}
        >
          Account
        </button>
      </Link>
      <Link href="/setting-profile/block" scroll={false}>
        <button
          className={`w-[13rem] h-[3.188rem] font-normal text-settingProfileNavbar text-[0.938rem] rounded-[0.563rem] mx-[0.625rem] mb-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${
            pathname === "/setting-profile/block" ? "active-link" : ""
          }`}
        >
          Block
        </button>
      </Link>
      <Link href="/setting-profile/appearange" scroll={false}>
        <button
          className={`w-[13rem] h-[3.188rem] font-normal text-settingProfileNavbar text-[0.938rem] rounded-[0.563rem] mx-[0.625rem] mb-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${
            pathname === "/setting-profile/appearange" ? "active-link" : ""
          }`}
        >
          Appearange
        </button>
      </Link>
      <Link href="/setting-profile/language" scroll={false}>
        <button
          className={`w-[13rem] h-[3.188rem] font-normal text-settingProfileNavbar text-[0.938rem] rounded-[0.563rem] mx-[0.625rem] mb-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${
            pathname === "/setting-profile/language" ? "active-link" : ""
          }`}
        >
          Language
        </button>
      </Link>
      <Link href="/setting-profile/support" scroll={false}>
        <button
          className={`w-[13rem] h-[3.188rem] font-normal text-settingProfileNavbar text-[0.938rem] rounded-[0.563rem] mx-[0.625rem] mb-[0.625rem] py-[0.875rem] pl-[1.25rem] pr-[8.875rem] ${
            pathname === "/setting-profile/support" ? "active-link" : ""
          }`}
        >
          Support
        </button>
      </Link>
    </>
  );
};

export default NavbarButtons;
