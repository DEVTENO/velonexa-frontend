"use client";
import React from "react";
import ProfileLayout from "@/components/layouts/setting-profile-layout";
import AccountLayout from "@/components/layouts/setting-profile-account";
import BlockLayout from "@/components/layouts/setting-profile-block";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  switch (slug) {
    case "profile":
      return <ProfileLayout />;
    case "account":
      return <AccountLayout />;
    case "block":
      return <BlockLayout />;
  }
}
