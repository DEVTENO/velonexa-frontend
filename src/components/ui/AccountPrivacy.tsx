import React from "react";
import SwitchPrivacy from "../fragments/privacySwitch";

const AccountPrivacy: React.FC = () => {
  return (
    <div className="w-[40.75rem] h-[12.75rem] mt-[2.063rem]">
      <p className="font-medium text-base">Account Privacy</p>
      <div className="mt-[0.688rem] w-[40.75rem] h-[10.625rem] py-[0.938rem] pl-[0.938rem] bg-inputProfileBg border border-inputProfileBorder rounded-[0.5rem] flex flex-wrap items-center">
        <div className="flex flex-col w-[34.813rem]">
          <p className="font-medium text-sm">Private Account</p>
          <div className="text-privateAccountText text-[0.669rem] w-[33.563rem] mt-[0.5rem]">
            <p>When your account is public, your profile and posts can be seen by anyone, on or off faceflix, even if they don’t have an faceflix account.</p>
            <p className="mt-3">
              When your account is private, only the followers you can see what you share, including your photos or videos on hashtag and location pages, and your followers and following lists. Certain info on your profile, like your
              profile picture and username, is visible to everyone on and off faceflix
            </p>
          </div>
        </div>
        <SwitchPrivacy />
      </div>
    </div>
  );
};

export default AccountPrivacy;
