import React from "react";
import ChangeImage from "../ui/ChangeImage";
import UpdateProfile from "../ui/UpdateProfile";

const ProfileLayout: React.FC = () => {
  return (
    <div>
      <ChangeImage />
      <UpdateProfile />
    </div>
  );
};

export default ProfileLayout;
