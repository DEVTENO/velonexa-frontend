import localFont from "next/font/local";
import { Poppins } from "next/font/google";

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

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  style: "normal",
});

