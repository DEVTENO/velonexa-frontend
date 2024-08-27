"use client";

import FacebookAuth from "@/components/ui/FacebookAuth";
import LogoRegister from "@/components/ui/LogoVelonexa";
import { FetchApiResponse, LoginFormData } from "@/lib/types/types";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface ValidationError {
  username?: string[];
  password?: string[];
}

const UsernameValidasi = (username: string): string[] => {
  const error: string[] = [];
  !username || (username == "" && error.push("Username harus diisi"));
  username.length < 5 && error.push("Username Minimal 5 Karakter");
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
  usernameError.length > 0 && (error.username = usernameError);

  const passwordError = PasswordValidasi(data.password);
  passwordError.length > 0 && (error.password = passwordError);

  return { isvalid: Object.keys(error).length === 0, error };
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<ValidationError>({});
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const router = useRouter();

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        router.replace("/login");
      }, 3000);
    }
  }, [message, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.name && typeof target.value === "string") {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const data: LoginFormData = {
      username: target.username.value,
      password: target.password.value,
    };

    const { isvalid, error: ValidationError } = ValidasiLoginForm(data);
    setError(ValidationError);

    if (isvalid) {
      try {
        const res = await fetch("/api/v1/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          throw new Error("Login Gagal");
        }
        const data: FetchApiResponse<LoginFormData> = await res.json();

        if (data.success) {
        }
      } catch (error) {}
    }
  };

  return (
    <div className="px-8 pb-8 font-segoui">
      {/* Komponen logo register ada di /src/components/ui/FacebookAuth.tsx */}
      <LogoRegister>
        <h1>VeloneXa</h1>
      </LogoRegister>

      {showMessage && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">{message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Username"
          type="text"
          id="username"
          name="username"
        />
        {error.username && (
          <div className="text-red-500 text-sm mt-1">{error.username}</div>
        )}

        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
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
