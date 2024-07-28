"use client";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import React, { MouseEventHandler, useRef, useState } from "react";

export default function SettingIconWithModal() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const overlay = useRef(null);
  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group  relative cursor-pointer"
      >
        <Settings />
        <div
          className={cn(
            `group-hover:opacity-100  opacity-0 absolute top-6 left-8 -translate-x-4 z-10   `,
            "bg-black text-white text-sm text-center py-1 px-1 rounded-[6px]",
            "transition-opacity   delay-500 "
          )}
        >
          Opsi
        </div>
      </div>
      {isOpen ? (
        <div className="w-full h-full flex flex-col justify-center items-center fixed inset-0 z-30">
          <div
            onClick={close}
            ref={overlay}
            className="  bg-black opacity-35  fixed inset-0 -z-40"
          />
          <div className="w-full text-center max-w-sm bg-white text-black">
            <p className="w-full py-2 active:bg-gray-200">Keluar</p>
            <p
              onClick={() => setIsOpen(false)}
              className="w-full py-2 active:bg-gray-200"
            >
              Batal
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
