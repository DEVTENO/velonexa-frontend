import { ReactNode } from "react";
import ProfileLayouts from "./ProfileLayouts";
import UserProfileLayouts from "@/components/layouts/user-profile-layouts";
export default function UserLayouts({
  children,
  params,
}: {
  children: ReactNode;
  params: { username: string };
}) {
  const { username } = params;
  return (
    <>
      <ProfileLayouts username={username}>
        <UserProfileLayouts username={username} />
      </ProfileLayouts>
      {children}
      <div className="w-full text-center py-8">Footer</div>
    </>
  );
}
