"use client";
import { usePathname } from "next/navigation";

const ProfileLayouts = ({
  children,
  username,
}: {
  children: React.ReactNode;
  username: string;
}) => {
  const pathname = usePathname();
  const APPEAR_PATH = [
    `/${username}/tagged`,
    `/${username}/saved`,
    `/${username}/reels`,
    `/${username}`,
  ];
  return <>{APPEAR_PATH.includes(pathname) && <>{children}</>}</>;
};

export default ProfileLayouts;
