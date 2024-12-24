"use client";
import React from "react";
import ProfileLayout from "@/components/layouts/setting-profile-layout";
import AccountLayout from "@/components/layouts/setting-profile-account";
import BlockLayout from "@/components/layouts/setting-profile-block";
import AppearanceLayout from "@/components/layouts/setting-profile-appearance";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  switch (slug) {
    case "profile":
      return <ProfileLayout />;
    case "account":
      return <AccountLayout />;
    case "block":
      return <BlockLayout />;
    case "appearance":
      return <AppearanceLayout />;
    default:
      return <ProfileLayout />;
  }
}
