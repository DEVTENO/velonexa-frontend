"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LogoRegister from "@/components/ui/LogoVelonexa";
import FacebookAuth from "@/components/ui/FacebookAuth";
import { FetchApiResponse, RegisterFormData } from "@/lib/types/types";

//ini adalah fungsi helper untuk validasi email
const isEmailValid = (email: string): boolean => {
  return email.includes("@gmail.com");
};

//ini adalah fungsi helper untuk validasi username
const isUsernameValid = (username: string): boolean => {
  return username.length >= 4;
};

const Register: React.FC<RegisterFormData> = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<Partial<RegisterFormData>>({});

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const queryParameter =
      "Pendaftaran%20akun%20kamu%20berhasil%2C%20silahkan%20login%20%21";

    const isValid =
      !isUsernameValid(formData.username) ||
      !isEmailValid(formData.email) ||
      formData.password !== formData.confirmPassword ||
      formData.password.length < 5 ||
      formData.confirmPassword.length < 5 ||
      formData.password.trim() === "" ||
      formData.confirmPassword.trim() === "";

    if (isValid) {
      setError({
        username: !isUsernameValid(formData.username)
          ? "Username Seharusnya Memiliki Setidaknya 4 Karakter"
          : undefined,
        email: !isEmailValid(formData.email)
          ? "Email Kamu Tidak Menggunakan Gmail"
          : undefined,
        confirmPassword:
          formData.password !== formData.confirmPassword
            ? "Password Tidak Sama"
            : formData.password.length < 5 ||
              formData.confirmPassword.length < 5
            ? "Password Harus Lebih Dari 5"
            : formData.password.trim() === "" ||
              formData.confirmPassword.trim() === ""
            ? "Password Dan Confirm Password Kosong"
            : undefined,
      });
      return;
    }
    try {
      const response = await fetch("/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data =
          (await response.json()) as FetchApiResponse<RegisterFormData>;
        if (!data.success) {
        } else {
          setMessage(data.message);
          setError({
            username: undefined,
            email: undefined,
            confirmPassword: undefined,
          });

          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          setTimeout(() => {
            router.push(`/login?message=${queryParameter}`);
          }, 3000);
        }
      } else {
        // ... handle error jika response tidak OK (misalnya status 4xx)
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
    <div className="px-8 pb-8 font-segoui">
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
      <div>
        <p className="text-green-700">{message}</p>
      </div>
      <form onSubmit={handleSubmit} action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Username"
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {error.username && (
          <div className="text-red-500 text-sm mt-1">{error.username}</div>
        )}
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Email"
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {error.email && (
          <div className="text-red-500 text-sm mt-1">{error.email}</div>
        )}
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error.password && (
          <div className="text-red-500 text-sm mt-1">{error.password}</div>
        )}
        <input
          className="border border-[#dbdbdb] mb-2 p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {error.confirmPassword && (
          <div className="text-red-500 text-sm mt-1">
            {error.confirmPassword}
          </div>
        )}
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
        <button className="container text-[14px] leading-[18px] text-white hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-md  mt-[18px]">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
