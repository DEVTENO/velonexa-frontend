import React from "react";
import { billabong, segoeui } from "./font";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`border mt-3 text-center border-[#DBDBDB] min-h-[623px] m-auto w-[350px] ${segoeui.variable} ${billabong.variable}`}
    >
      {children}
    </div>
  );
};

export default Layout;