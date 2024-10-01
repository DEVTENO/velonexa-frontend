"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Page = () => {
  const pathname = usePathname();
  const [value, setValue] = useState<string | null>(pathname);

  // Load value from localStorage when component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem("myValue");
      if (savedValue) {
        setValue(savedValue);
      }
    }
  }, []);

  // Save value to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("unload", (e: any) => {
        e.preventDefault;
        localStorage.setItem("myValue", pathname);
      });
    }
  }, [pathname]);
  return (
    <div className="flex w-full h-screen relative 2xl:overflow-auto  xl:overflow-hidden">
      <Responsive1280 pathname={pathname} value={value} />
      <Responsive1440 pathname={pathname} value={value} />
    </div>
  );
};

export default Page;

type DesktopResponsiveProps = {
  value?: string | null;
  pathname?: string;
};
const Responsive1280 = (props: DesktopResponsiveProps) => {
  const { pathname, value } = props;
  const animationForm = () => {
    return value !== pathname
      ? {
          x: pathname == "/auth/login" ? [683, 0] : [0, 683],
        }
      : {
          x: pathname == "/auth/login" ? 0 : 683,
        };
  };
  const animationBackground = () => {
    return value !== pathname
      ? {
          x: pathname == "/auth/login" ? [0, 683] : [683, 0],
        }
      : {
          x: pathname == "/auth/login" ? 683 : 0,
        };
  };

  return (
    <div className="block 2xl:hidden ">
      <motion.div
        key={"form"}
        transition={{ bounce: 0, duration: 1 }}
        animate={animationForm()}
        style={
          value == pathname
            ? {
                position: "absolute",
                x: pathname == "/auth/login" ? 683 : 0,
              }
            : { position: "absolute", x: pathname == "/auth/login" ? 0 : 683 }
        }
        className="w-1/2 h-screen  pb-10 flex flex-col justify-start items-center overflow-y-scroll"
      >
        {pathname == "/auth/login" ? <Login /> : <Register />}
        <Footer />
      </motion.div>

      {/* background */}
      <motion.div
        key={"background"}
        transition={{ bounce: 0, duration: 1 }}
        style={
          value == pathname
            ? {
                position: "absolute",
                x: pathname == "/auth/login" ? 0 : 683,
              }
            : { position: "absolute", x: pathname == "/auth/login" ? 683 : 0 }
        }
        animate={animationBackground()}
        className="w-1/2 h-screen"
      >
        <Image
          src={"/bg-auth.jpg"}
          alt="bg-auth"
          width={1920}
          height={1080}
          className="h-full object-cover "
        />
      </motion.div>
    </div>
  );
};

const Responsive1440 = (props: DesktopResponsiveProps) => {
  const { pathname, value } = props;
  const animationForm = () => {
    return value !== pathname
      ? {
          x: pathname == "/auth/login" ? [720, 0] : [0, 720],
        }
      : {
          x: pathname == "/auth/login" ? 0 : 720,
        };
  };
  const animationBackground = () => {
    return value !== pathname
      ? {
          x: pathname == "/auth/login" ? [0, 720] : [720, 0],
        }
      : {
          x: pathname == "/auth/login" ? 720 : 0,
        };
  };

  return (
    <div className="2xl:block hidden">
      <AnimatePresence>
        <motion.div
          key={"form"}
          transition={{ bounce: 0, duration: 1 }}
          animate={animationForm()}
          style={
            value == pathname
              ? {
                  position: "absolute",
                  x: pathname == "/auth/login" ? 720 : 0,
                }
              : { position: "absolute", x: pathname == "/auth/login" ? 0 : 720 }
          }
          className="w-1/2 h-screen pb-10  flex  flex-col justify-start items-center"
        >
          {pathname == "/auth/login" ? <Login /> : <Register />}
          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* background */}
      <AnimatePresence>
        <motion.div
          key={"background"}
          transition={{ bounce: 0, duration: 1 }}
          style={
            value == pathname
              ? {
                  position: "absolute",
                  x: pathname == "/auth/login" ? 0 : 720,
                }
              : { position: "absolute", x: pathname == "/auth/login" ? 720 : 0 }
          }
          animate={animationBackground()}
          className="w-1/2 h-screen"
          exit={{ x: 720 }}
        >
          <Image
            src={"/bg-auth.jpg"}
            alt="bg-auth"
            width={1920}
            height={1080}
            className="h-full object-cover block"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const path = usePathname();

  const handleClick = () => {
    const newPath = path === "/auth/login" ? "/auth/login" : "/auth/register";
    localStorage.setItem("myValue", newPath);
  };

  return (
    <div className="2xl:mt-[58px] xl:mt-[1rem] text-sm text-center font-poppins flex gap-1">
      {path === "/auth/login" ? "Don't have an account?" : "Have an account?"}
      <Link
        onClick={handleClick}
        className="text-[#3971FF] font-bold"
        href={path === "/auth/login" ? "/auth/register" : "/auth/login"}
      >
        {path === "/auth/login" ? "Create an account" : "Log In"}
      </Link>
    </div>
  );
};
