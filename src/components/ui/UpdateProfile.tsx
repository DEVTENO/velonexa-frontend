"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, { message: "Username minimal 2 karakter" }).max(50, { message: "Username maksimal 50 karakter" }),
  bio: z.string(),
  name: z.string(),
  gender: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const UpdateProfile: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      name: "",
      gender: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="w-[45.875rem] h-[26.063rem] py-[2.313rem] pl-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.688rem] relative">
          <div className="flex flex-col mb-[2.063rem]">
            <p className="font-medium text-[1.188rem]">Profile</p>
            <p className="font-normal text-[0.938rem] text-secondaryText">Update your account settings</p>
          </div>
          <div className="w-[40.5rem] h-[16rem]">
            <div className="mb-4">
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" placeholder="Bio" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" placeholder="Gender" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="border border-updateBtn bg-updateButtonBg w-[9.75rem] h-[2.688rem] ml-[36.125rem] mt-4 rounded-[0.813rem] text-updateBtn hover:bg-updateBtn hover:text-white flex items-center justify-center">
          Update
        </Button>
      </form>
    </Form>

    // <form>
    //   <div className="w-[45.875rem] h-[26.063rem] py-[2.313rem] pl-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.688rem]">
    //     <div className="flex flex-col mb-[2.063rem]">
    //       <p className="font-medium text-[1.188rem]">Profile</p>
    //       <p className="font-normal text-[0.938rem] text-secondaryText">Update your account settings</p>
    //     </div>
    //     <div className="w-[40.5rem] h-[16rem]">
    //       <div className="mb-4">
    //         <input
    //           className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder focus:outline focus:outline-textButton placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
    //           type="text"
    //           placeholder="Bio"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <input
    //           className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder focus:outline focus:outline-textButton placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
    //           type="text"
    //           placeholder="Name"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <input
    //           className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder focus:outline focus:outline-textButton placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
    //           type="text"
    //           placeholder="Username"
    //           maxLength={16}
    //         />
    //       </div>
    //       <div>
    //         <input
    //           className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder focus:outline focus:outline-textButton placeholder-placeholderProfile placeholder:italic pl-[1.25rem]"
    //           type="text"
    //           placeholder="Gender"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <button>
    //     <div className="border border-updateBtn bg-updateButtonBg w-[9.75rem] h-[2.688rem] ml-[36.125rem] mt-4 rounded-[0.813rem] text-updateBtn hover:bg-updateBtn hover:text-white flex items-center justify-center">Update</div>
    //   </button>
    // </form>
  );
};

export default UpdateProfile;
