import React from "react";

const UpdateProfile: React.FC = () => {
  return (
    <div className="w-[45.875rem] h-[26.063rem] py-[2.313rem] pl-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.688rem]">
      <div className="flex flex-col mb-[2.063rem]">
        <p className="font-medium text-[1.188rem]">Profile</p>
        <p className="font-normal text-[0.938rem] text-secondaryText">Update your account settings</p>
      </div>
    </div>
  );
};

export default UpdateProfile;
