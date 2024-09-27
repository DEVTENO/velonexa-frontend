"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ProfileLayout from "@/components/layouts/setting-profile-layout";

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  const route = pathname;

  switch (route) {
    case "/setting-profile/profile":
      return <ProfileLayout />;
  }
}
