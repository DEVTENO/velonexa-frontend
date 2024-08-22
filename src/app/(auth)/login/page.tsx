"use client";

import FacebookAuth from "@/components/ui/FacebookAuth";
import LogoRegister from "@/components/ui/LogoVelonexa";
import { FetchApiResponse, LoginFormData } from "@/lib/types/types";
import { useState } from "react";

interface ValidationError {
  username?: string[];
  password?: string[];
}

const UsernameValidasi = (username: string): string[] => {
  const error: string[] = [];
  !username || (username == "" && error.push("Username harus diisi"));
  username.length < 5 && error.push("Username Minimal 5 Karakter");
  console.log(error);
  return error;
};

const PasswordValidasi = (password: string): string[] => {
  const error: string[] = [];
  !password || (password == "" && error.push("Password Harus Diisi"));
  password.length < 6 && error.push("Password Minimal 6 Karakter");
  return error;
};

const ValidasiLoginForm = (
  data: LoginFormData
): { isvalid: boolean; error: ValidationError } => {
  const error: ValidationError = {};

  const usernameError = UsernameValidasi(data.username);
  if (usernameError.length > 0) {
    error.username = usernameError;
  }

  const passwordError = PasswordValidasi(data.password);
  if (passwordError.length > 0) {
    error.password = passwordError;
  }

  return { isvalid: Object.keys(error).length === 0, error };
};

const Login: React.FC<LoginFormData> = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<Partial<LoginFormData>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError({});
  };

  return (
    <div className="px-8 pb-8 font-segoui">
      {/* Komponen logo register ada di /src/components/ui/FacebookAuth.tsx */}
      <LogoRegister>
        <h1>VeloneXa</h1>
      </LogoRegister>

      <form onSubmit={handleSubmit} action="" className="mt-[9px]">
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
