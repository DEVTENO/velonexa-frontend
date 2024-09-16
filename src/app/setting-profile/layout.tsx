import React from "react";
import SettingProfileNavbar from "@/components/ui/SettingProfileNavbar";

export default function SettingProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex font-poppins">
      <SettingProfileNavbar />
      {children}
    </div>
  );
}
