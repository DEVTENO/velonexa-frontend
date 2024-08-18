import localFont from "next/font/local";
// font.js ini khusus untuk login atau register, jadi kedepannya jika ingin dipindah agar bisa jadi public tidak masalah
export const billabong = localFont({
  src: [
    {
      path: "../../public/fonts/billabong/Billabong.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-billabong",
});

export const segoeui = localFont({
  src: [
    {
      path: "../../public/fonts/segoeui/SegoeUI.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-segoui",
});
