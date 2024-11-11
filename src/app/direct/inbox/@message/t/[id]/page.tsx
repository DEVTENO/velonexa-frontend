"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = (props: { params: { id: string } }) => {
  const { params } = props;
  const pathname = usePathname();
  const { id } = params;
  if (pathname === "/direct/inbox") {
    return <div className="bg-red-600">Click to Message</div>;
  }

  return <MessageComponents id={id} />;
};

export default Page;

const MessageComponents = (props: { id: string }) => {
  const { id } = props;
  const router = useRouter();
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        router.push("/direct/inbox"); // untuk kembali ke halaman sebelumnya
        // atau router.push('/direct/inbox'); // jika ingin langsung ke halaman inbox
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [router]);

  return (
    <div className=" w-full h-full relative ">
      <header className="w-full h-full 2xl:max-w-[619px]  max-h-[84px] flex bg-yellow-300">
        Image
        <div>
          <h1>Name</h1>
          <p>status</p>
        </div>
      </header>
      <main>isi</main>
      <footer className="absolute bottom-0 w-full flex justify-center pb-2">
        <div className="w-full max-w-[584px] rounded-full flex justify-center items-center gap-1 bg-slate-300 px-3">
          <div className="size-7 relative rounded-full overflow-hidden">
            <Image
              src={"/user-profile.jpg"}
              width={500}
              height={500}
              alt={"awo"}
              className="absolute inset-0 size-7 object-cover"
            />
          </div>
          <Input
            placeholder="sendMessage"
            type="text"
            className="focus:ring-0 focus:outline-none active:ring-0  focus:border-transparent outline-none"
          />
          <Button type="submit" className="text-xs">
            <SendHorizonal />
          </Button>
        </div>
      </footer>
    </div>
  );
};
