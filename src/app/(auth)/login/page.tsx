"use client";

import FacebookAuth from "@/components/ui/FacebookAuth";
import LogoRegister from "@/components/ui/LogoRegister";
import { LoginFormData } from "@/lib/types/types";
import { useState } from "react";

const Login: React.FC<LoginFormData> = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<Partial<LoginFormData>>({});

  return (
    <div className="px-8 pb-8 font-segoui">
      {/* Komponen logo register ada di /src/components/ui/FacebookAuth.tsx */}
      <LogoRegister>
        <h1>VeloneXa</h1>
      </LogoRegister>

      <form action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Username"
          type="text"
          id="username"
        />
        {error.username && (
          <div className="text-red-500 text-sm mt-1">{error.username}</div>
        )}

        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Password"
          type="password"
          id="password"
        />
        <button className="container text-[14px] leading-[18px] text-white hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-md  mt-[18px]">
          Login
        </button>
      </form>
      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="h-px bg-[#DBDBDB] w-[110px]" />
        <div>Atau</div>
        <div className="h-px bg-[#DBDBDB] w-[110px]" />
      </div>
      <FacebookAuth />
    </div>
  );
};

export default Login;
