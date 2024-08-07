"use client";

import React, { useState } from "react";
import LogoRegister from "../../components/LogoRegister";
import FacebookAuth from "../../components/FacebookAuth";

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
    <div className="container">
      <LogoRegister>
        <h1>VeloneXa</h1>
      </LogoRegister>
      <p className="text-gray-500 font-[600]">
        Sign up to see photos and videos from your friends.
      </p>
      <FacebookAuth />
      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="h-px bg-[#DBDBDB] w-[110px]" />
        <div>Atau</div>
        <div className="h-px bg-[#DBDBDB] w-[110px]" />
      </div>

      <form action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] p-2"
          placeholder="Username"
          type="text"
        />
        <input
          className="border border-[#dbdbdb] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] p-2"
          placeholder="Email"
          type="text"
        />
        <input
          className="border border-[#dbdbdb] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] p-2"
          placeholder="Password"
          type="password"
        />
        <input
          className="border border-[#dbdbdb] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] p-2"
          placeholder="Confirm Password"
          type="password"
        />
      </form>

      <p>
        People who use our service may have uploaded your contact information to
        Instagram. Learn More
      </p>
      <p>
        By signing up, you agree to our Terms , Privacy Policy and Cookies
        Policy .
      </p>
    </div>
  );
};

export default Register;
