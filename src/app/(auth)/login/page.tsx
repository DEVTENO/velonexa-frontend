"use client";

import AnimasiProses from "@/components/ui/AnimasiProses";
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(/^\s*$/.test(username)) {
  error.push("Username tidak boleh kosong atau hanya spasi");
}

else if (!emailRegex.test(username.trim())) {
    // Cek jika hanya spasi atau kosong
    error.push('Username tidak valid, contoh: emailkamu@gmail.com');
  }
  if (username.trim().length < 5) {
    error.push("Username Minimal 5 Karakter");
  }
  return error;
};

const PasswordValidasi = (password: string): string[] => {
  const error: string[] = [];

  if (password.length < 8) {
    error.push("Password harus memiliki setidaknya 8 karakter");
  }
  // 2. Validasi huruf besar
  if (!/[A-Z]/.test(password)) {
    error.push("Password harus memiliki setidaknya satu huruf besar");
  }

  if (!/\d/.test(password)) { 
    error.push("Password harus memiliki setidaknya satu angka"); 
  }



  // 3. Validasi karakter spesial
  if (!/[!@#$%^&*]/.test(password)) { 
    error.push("Password harus memiliki setidaknya satu karakter spesial (!@#$%^&*)"); 
  }

  // (Opsional) Validasi panjang minimum 
 

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
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

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms) )
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
  

    const target = e.currentTarget as HTMLFormElement;
    const data: LoginFormData = {
      username: target.username.value,
      password: target.password.value,
    };

    const { isvalid, error: ValidationError } = ValidasiLoginForm(data);
    setError(ValidationError);

    if (isvalid) {
      try {
    setIsLoading(true)
        const [res] = await Promise.all([
          fetch("/api/v1/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }),
          delay(2000),
        ]);
        setIsLoading(false);
        if (res.ok) {
          const data = (await res.json()) as FetchApiResponse<LoginFormData>;

          if (data.success) { 
            setStatusMessage(data.message);

            setTimeout(() => {
            router.push('/')
              
            }, 2000);
          } else {
            setStatusMessage(data.message);
          }
        } else {
          setStatusMessage("Username atau password salah");
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

      {statusMessage && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">{statusMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} action="" className="mt-[9px]">
        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {error.username && error.username.length > 0 && (
          <div className="text-red-500 text-sm mt-1">{error.username[0]}</div>
        )}

        <input
          className="border border-[#dbdbdb] p-2 text-[13px] focus:outline-none  focus:border-gray-400 mt-1.5 w-[266px] h-[38px] span-2"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && error.password.length > 0 && (
          <div className="text-red-500 text-sm mt-1">{error.password[0]}</div>
        )}
        <button
          className="container text-[14px] leading-[18px] text-white hover:bg-[#1877F2] bg-[#0095F6] w-[17rem] h-[34px] rounded-md  mt-[18px]"
          disabled={isLoading}
        >
          {isLoading ? <AnimasiProses /> : "Login"}
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
