import React from "react";
import SettingProfileNavbar from "@/components/ui/SettingProfileNavbar";

export default function SettingProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full 2xl:h-screen  flex font-poppins  2xl:pl-32 relative">
      <SettingProfileNavbar />
      {children}
    </div>
  );
}
