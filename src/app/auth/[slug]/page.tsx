"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import Login from "./Login";
import Register from "./Register";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page = () => {
  const pathname = usePathname();
  const formRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window !== undefined) {
      if (pathname == "/auth/register") {
        gsap
          .timeline()
          .to(formRef.current, {
            xPercent: 50,
            duration: 1,
          })
          .to(formRef.current, {
            xPercent: 50,
            duration: 0.05,
          })
          .to(formRef.current, {
            xPercent: 100,
            duration: 1,
          });
        gsap
          .timeline()
          .to(bgRef.current, {
            xPercent: -50,
            duration: 1,
          })
          .to(bgRef.current, {
            xPercent: -50,
            duration: 0.05,
          })
          .to(bgRef.current, {
            xPercent: -100,
            duration: 1,
          });
      }
      if (pathname == "/auth/login") {
        gsap
          .timeline()
          .to(formRef.current, {
            xPercent: -50,
            duration: 1,
          })
          .to(formRef.current, {
            xPercent: -50,
            duration: 0.05,
          })
          .to(formRef.current, {
            xPercent: -100,
            duration: 1,
          });

        gsap
          .timeline()
          .to(bgRef.current, {
            xPercent: 50,
            duration: 1,
          })
          .to(bgRef.current, {
            xPercent: 50,
            duration: 0.05,
          })
          .to(bgRef.current, {
            xPercent: 100,
            duration: 1,
          });
      }
    }
  }, [pathname]);

  return (
    <div className="flex w-full h-screen relative 2xl:overflow-hidden xl:overflow-hidden">
      <div
        ref={formRef}
        className={`w-1/2 h-screen pb-10  flex   flex-col justify-start items-center absolute ${
          pathname == "/auth/login" ? "right-0" : ""
        }  overflow-y-scroll`}
      >
        {pathname == "/auth/login" ? <Login /> : <Register />}
        <Footer />
      </div>

      {/* background */}
      <div
        ref={bgRef}
        className={`w-1/2 h-screen absolute ${
          pathname == "/auth/login" ? "left-0" : "right-0"
        }`}
      >
        <Image
          src={"/bg-auth.jpg"}
          alt="bg-auth"
          width={1920}
          height={1080}
          className="h-full object-cover block"
        />
      </div>
    </div>
  );
};

export default Page;

  

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
