import type { Metadata } from "next";
import "./globals.css";
import SidebarLayouts from "./sidebarLayouts";
import { billabong, segoeui } from "./font";
import { cn } from "@/lib/utils";
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
      <body className={cn(billabong.variable, segoeui.variable)}>
        <SidebarLayouts>{children}</SidebarLayouts>
      </body>
    </html>
  );
}
