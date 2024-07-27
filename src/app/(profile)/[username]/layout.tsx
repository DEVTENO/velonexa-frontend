import { ReactNode } from "react";
import UserProfileLayouts from "@/components/layouts/user-profile-layouts";

export default function ProfileLayouts({
  children,
  params,
}: {
  children: ReactNode;
  reels: ReactNode;
  params: { username: string };
}) {
  const { username } = params;
  return (
    <>
      <UserProfileLayouts username={username} />
      {children}
    </>
  );
}
