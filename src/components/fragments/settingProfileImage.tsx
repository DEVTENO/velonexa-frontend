import React from "react";
import Image from "next/image";

const ProfileImage: React.FC = () => {
  return (
    <div className="relative my-[2.438rem] overflow-hidden rounded-full" style={{ width: "111px", height: "111px" }}>
      <Image alt="Profile Image" src="/user-profile.jpg" sizes="100vw" fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default ProfileImage;
