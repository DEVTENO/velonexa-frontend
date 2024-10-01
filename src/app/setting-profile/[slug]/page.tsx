"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ProfileLayout from "@/components/layouts/setting-profile-layout";
import AccountLayout from "@/components/layouts/setting-profile-account";

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  const route = pathname;

  switch (route) {
    case "/setting-profile/profile":
      return <ProfileLayout />;
    case "/setting-profile/account":
      return <AccountLayout />;
  }
}
