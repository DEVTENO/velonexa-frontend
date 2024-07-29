import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full mt-10 text-center">
      <h1 className=" font-medium text-xl">Maaf, Halaman ini tidak tersedia</h1>
      <p className="mt-7">
        Tautan yang kamu cari mungkin tidak ada{" "}
        <Link className="text-blue-300" href={"/"}>
          kembali ke velonexa
        </Link>
      </p>
    </div>
  );
}
