import type { Metadata } from "next";
import "./globals.css";
import SidebarLayouts from "./sidebarLayouts";
import { billabong, segoeui, poppins } from "./font";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Velonexa",
  description: "Upload Photo and video anything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(billabong.variable, segoeui.variable, poppins.variable)}
      >
        <SidebarLayouts>{children}</SidebarLayouts>
        {/* {children} */}
        <Toaster richColors />
      </body>
    </html>
  );
}
