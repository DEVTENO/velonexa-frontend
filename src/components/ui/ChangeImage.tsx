import React from "react";
import ProfileImage from "../fragments/settingProfileImage";
import ChangeImageBtn from "../fragments/changeImageBtn";

const ChangeImage: React.FC = () => {
  return (
    <div className="mt-[7.5rem] mb-[1.75rem] px-[3.125rem] w-[45.875rem] h-[11.813rem] bg-settingUiBg border border-settingUiBorder rounded-[1.688rem]">
      <div className="flex flex-wrap justify-between">
        <ProfileImage />
        <ChangeImageBtn />
      </div>
    </div>
  );
};

export default ChangeImage;
