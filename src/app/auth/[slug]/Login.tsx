"use client";

import AnimasiProses from "@/components/ui/AnimasiProses";
import { FetchApiResponse, LoginFormData } from "@/lib/types/types";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, KeyRound, User } from "lucide-react";
import GoogleAuth from "@/components/ui/GoogleAuth";
import Divider from "@/components/ui/Divider";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/inputwithLogo";
import { toast } from "sonner";
import Cookies from "js-cookie";
const loginSchema = z.object({
  username: z
    .string()
    .min(6, { message: "username at least 6 character" })
    .max(16, { message: "username at least under 16 character" }),
  password: z.string().min(8, { message: "password at least 8 character" }),
  remember: z.boolean(),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const form = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<string>("password");
  const router = useRouter();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (e: LoginSchema) => {
    setStatusMessage(null);
    const formData = {
      username: e.username,
      password: e.password,
    };
    try {
      setIsLoading(true);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/login`;
      const [res] = await Promise.all([
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
      ]);
      if (res.ok) {
        const data = (await res.json()) as FetchApiResponse<LoginFormData>;
        if (data.success) {
          setStatusMessage(data.message);
          if (e.remember) {
            if (window !== undefined) {
              Cookies.set("token", "ini token ku");
              localStorage.setItem("token", "ini token ku");
            }
          }
          toast.success(data.message, { position: "top-center" });
          router.push("/");
        } else {
          setStatusMessage(data.message);
        }
      } else {
        setStatusMessage("Username atau password salah");
        toast.error("Username atau password salah", {
          position: "top-center",
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const EyeIcon = () => {
    return (
      <>
        {showPassword === "password" ? (
          <Eye
            size={30}
            color="#BEBEBE"
            onClick={() => setShowPassword("text")}
          />
        ) : (
          <EyeOff
            size={30}
            onClick={() => setShowPassword("password")}
            color="#BEBEBE"
          />
        )}
      </>
    );
  };

  return (
    <div className="px-8 2xl:mt-36 xl:mt-12 w-[591px]  font-poppins  ">
      <header className=" 2xl:text-[37px] xl:text-[2rem] font-semibold ">
        Log in to Your Account
      </header>
      <p className=" text-[calc(1rem+2px)]  mt-2 mb-[76px]  font-[500]  text-[#7A7A7A]">
        Welcome back!, Select method to login
      </p>

      {statusMessage && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">{statusMessage}</span>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} action="" className="">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    icon={<User color="#BEBEBE" />}
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type={showPassword}
                    className="mt-5"
                    icon={<KeyRound color="#BEBEBE" />}
                    icon2={<EyeIcon />}
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex justify-between items-center font-poppins text-[18.5px]  mt-7 mb-7 ">
            <div className="flex items-center gap-3">
              <input
                id="remember"
                type="checkbox"
                className="bg-[#3971FF] size-[21px] "
                {...form.register("remember")}
              />
              <label htmlFor="remember" className="text-[#7A7A7A]">
                Remember Me
              </label>
            </div>
            <div className="text-[#3971FF] cursor-pointer hover:underline font-semibold">
              Forget Password?
            </div>
          </div>

          <button
            className=" text-[25px] leading-[18px]  text-white hover:bg-[#2d59ca] bg-[#3971FF] w-full h-[68px] rounded-xl  mt-[18px]"
            disabled={isLoading}
          >
            {isLoading ? <AnimasiProses /> : "Login"}
          </button>
        </form>
      </Form>

      <div className="mt-6 2xl:mt-10">
        <Divider />
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Login;
