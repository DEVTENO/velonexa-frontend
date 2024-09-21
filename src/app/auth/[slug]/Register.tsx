"use client";
import React, { useState } from "react";
import { FetchApiResponse, RegisterFormData } from "@/lib/types/types";
import AnimasiProses from "@/components/ui/AnimasiProses";
import GoogleAuth from "@/components/ui/GoogleAuth";
import Divider from "@/components/ui/Divider";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, KeyRound, Mail, User, User2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/inputwithLogo";
const registerSchema = z
  .object({
    username: z
      .string()
      .min(5, { message: "username minimum 5 characters" })
      .max(20, { message: "username maximum 20 characters" })
      .regex(/^[a-z0-9_]+$/, {
        message: "username should be lowercase and number!",
      }),
    email: z
      .string()
      .email({ message: "Email not valid" })
      .refine((email) => email.endsWith("@gmail.com"), {
        message: "Email must end with @gmail.com",
      }),
    password: z
      .string()
      .min(8, { message: "Password minimun 8 character" })
      .regex(/[A-Z]/, { message: "Password must contain 1 capital" })
      .regex(/\d/, { message: "Password must contain 1 number" })
      .regex(/[!@#$%^&*]/, { message: "Password must contain Symbol" }),
    confirmPassword: z
      .string()
      .min(8, { message: "confirm password minimum 8 character" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not match",
    path: ["confirmPassword"],
  });

type RegisterSchema = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<string>("password");
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const data =
          (await response.json()) as FetchApiResponse<RegisterFormData>;
        if (!data.success) {
          throw new Error("Your data not valid such as our backend. lol");
        } else {
          toast.success(`${data.message}`, { position: "top-center" });
          setIsLoading(false);
          router.push(`/auth/login`);
        }
      } else {
        // ... handle error jika response tidak OK (misalnya status 4xx)
        const errorData = await response.json();
        toast.error(errorData.message, { position: "top-center" });
      }
    } catch (error) {
      toast.error("User already Exist", { position: "top-center" });
      console.log(error);
    } finally {
      setIsLoading(false);
      // reset({ confirmPassword: "", email: "", password: "", username: "" });
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
    <div className="px-8 mt-36 font-poppins">
      <header className=" text-[37px] font-semibold ">
        Register to your account
      </header>
      <p className="text-[#7A7A7A] text-[18px] font-[500] mt-2 mb-[76px]">
        Welcome!, Select method to register
      </p>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action=""
        className="mt-[9px]"
      >
        {/* username */}
        <Form {...form}>
          <div className="flex flex-col  gap-5">
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
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      icon={<Mail color="#BEBEBE" />}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={showPassword}
                      icon={<KeyRound color="#BEBEBE" />}
                      icon2={<EyeIcon />}
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className=" text-center">
                    Your password must be at least 8 characters long and contain
                    at least one uppercase letter, one number, and one special
                    symbol for security.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={"password"}
                      icon={<KeyRound color="#BEBEBE" />}
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>

        <button
          className="container text-[25px] leading-[18px] text-white hover:bg-[#2d59ca] bg-[#3971FF] w-[591px] h-[68px] rounded-xl  mt-[18px]"
          disabled={isLoading}
        >
          {isLoading ? <AnimasiProses /> : "Register"}
        </button>
      </form>
      <div className="mt-10">
        <Divider />
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Register;
