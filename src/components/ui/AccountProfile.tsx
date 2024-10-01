"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  changePassword: z.string(),
  phoneNumber: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const AccountProfile: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      changePassword: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="w-[45.875rem] h-[36.625rem] mt-[7.5rem] mb-4 py-[2.313rem] px-[2.563rem] border rounded-[1.938rem] border-settingUiBorder bg-settingUiBg relative">
          <div className="flex flex-col mb-[2.063rem]">
            <p className="font-medium text-[1.188rem]">Account</p>
            <p className="font-normal text-[0.938rem] text-secondaryText">Update your account settings. Set your preferred language and time zone</p>
          </div>
          <div className="w-[40.75rem] h-[11.75rem]">
            <div className="mb-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="w-[40.75rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs h-2" />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="changePassword"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="w-[40.75rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
                        placeholder="Change Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs h-2" />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-[2.063rem]">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="w-[40.75rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
                        placeholder="Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs h-2" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="border border-updateBtn bg-updateButtonBg w-[9.75rem] h-[2.688rem] ml-[36.125rem] rounded-[0.813rem] text-updateBtn hover:bg-updateBtn hover:text-white flex items-center justify-center">
          Update
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
