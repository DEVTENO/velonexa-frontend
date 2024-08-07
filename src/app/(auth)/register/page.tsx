"use client";

import React, { useState } from "react";
import LogoRegister from "@/components/ui/LogoRegister";
import FacebookAuth from "@/components/ui/FacebookAuth";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC<RegisterFormData> = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    console.log("berhasil klik", formData);
  };

  return (
    <div className="container font-segoui">
      {/* Komponen logo register ada di /src/components/ui/FacebookAuth.tsx */}
      <LogoRegister>
        <h1>VeloneXa</h1>
      </LogoRegister>
      <span className="text-gray-500 font-[500]">
        Sign up to see photos and videos from your friends.
      </span>
      <FacebookAuth />
      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="h-px bg-[#DBDBDB] w-[110px]" />
        <div>Atau</div>
        <div className="h-px bg-[#DBDBDB] w-[110px]" />
      </div>

      <form action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Username"
          type="text"
        />
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Email"
          type="text"
        />
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Password"
          type="password"
        />
        <input
          className="border border-[#dbdbdb] mb-2 p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Confirm Password"
          type="password"
        />
        <span className="flex flex-col text-[12px] tracking-tight text-balance  text-[#737373] ">
          <span className="">
            People who use our service may have uploaded your contact
            information to Velonexa. Learn More
          </span>
          <span className="mt-2">
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </span>
        </span>
        <button className="container text-[14px] leading-[18px] text-white hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-lg  mt-[18px]">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
