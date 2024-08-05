import localFont from "next/font/local"

export  const billabong = localFont({
    src: [
        {
            path: "Billabong.otf",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-billabong"
})