import localFont from "next/font/local"


export const billabong = localFont({
    src: [
        {
            path: "../../../public/fonts/billabong/Billabong.otf",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-billabong"
})