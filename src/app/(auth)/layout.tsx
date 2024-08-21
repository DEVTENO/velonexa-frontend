"use client";
import React from "react";
import { billabong, segoeui } from "@/app/font";
import Link from "next/link";
import { usePathname } from "next/navigation";


type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = usePathname();
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        {path == "/register" ? (
          <>
            <div
              className={`border rounded-lg text-center w-96 ${segoeui.variable} ${billabong.variable} `}
            >
              {children}
            </div>
          </>
        ) : (
          <>
            <div
              className={`border rounded-lg text-center w-96 ${segoeui.variable} ${billabong.variable} `}
            >
              {children}
            </div>
          </>
        )}

        <div className="border mt-3 w-96 rounded-lg text-center py-5">
          {path == "/register" ? (
            <>
              {" "}
              have an account?{" "}
              <Link href={"/login"} className="text-blue-600 font-bold">
                Log In
              </Link>{" "}
            </>
          ) : (
            <>
              {" "}
              don{"'"}t have an account?{" "}
              <Link href={"/register"} className="text-blue-600 font-bold">
                Register
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
