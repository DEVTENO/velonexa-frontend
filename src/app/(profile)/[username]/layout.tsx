import { ReactNode } from "react";
import UserProfileLayouts from "@/components/layouts/user-profile-layouts";
import NavigationProfile from "@/components/fragments/navigation-profile";

export default function ProfileLayouts({
  children,
  params,
}: {
  children: ReactNode;
  params: { username: string };
}) {
  const { username } = params;
  return (
    <>
      <UserProfileLayouts username={username} />
      <NavigationProfile username={username} />
      {children}
    </>
  );
}
