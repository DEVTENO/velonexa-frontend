import React from "react";
import { billabong, segoeui } from "@/app/font";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className={`border rounded-lg text-center  w-96 ${segoeui.variable} ${billabong.variable} `}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
