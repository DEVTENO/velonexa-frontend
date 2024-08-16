"use client";

import React, { useState } from "react";
import LogoRegister from "@/components/ui/LogoRegister";
import FacebookAuth from "@/components/ui/FacebookAuth";
import { FetchApiResponse, RegisterFormData } from "@/lib/types/types";

const Register: React.FC<RegisterFormData> = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    setActiveButton(false);

    try {
      const response = await fetch("/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data =
          (await response.json()) as FetchApiResponse<RegisterFormData>;
        if (data.success) {
          setIsLoading(false);
          setMessage(data.message);
          console.log(data.data);
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {}
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
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
      <div>{message}</div>
      <form action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Username"
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Email"
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className="border border-[#dbdbdb] mb-2 p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
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
        <button
          onClick={formData.username.length >= 5 ? handleSubmit : ""}
          className="container text-[14px] leading-[18px] text-white hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-lg  mt-[18px]"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
