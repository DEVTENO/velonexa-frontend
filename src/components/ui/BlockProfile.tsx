import React from "react";

const BlockProfile: React.FC = () => {
  return (
    <div className="w-[45.875rem] h-[21.813rem] py-[2.313rem] px-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.938rem] ">
      <div className="w-[40.75rem] h-[17.188rem] mb-[2.063rem]">
        <p className="font-medium text-[1.188rem]">Block</p>
        <p className="text-base mt-[0.125rem] font-normal text-secondaryText">list of accounts you blocked</p>
      </div>
      <div className="w-[40.75rem] h-[11.75rem] flex flex-col"></div>
    </div>
  );
};

export default BlockProfile;
