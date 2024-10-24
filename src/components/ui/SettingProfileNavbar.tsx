import React from "react";
import NavbarButtons from "../fragments/setting-profile-navbar-buttons";

const SettingProfileNavbar: React.FC = () => {
  return (
    <div className="mt-[7.5rem]  mx-[1.563rem] h-screen 2xl:h-full  max-h-[53rem] w-[15.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.938rem] sticky top-0">
      <div className=" max-w-[14.25rem] ml-[0.313rem] mr-4 mt-[7.438rem] mb-[22.063rem] flex flex-col ">
        <NavbarButtons />
      </div>
    </div>
  );
};

export default SettingProfileNavbar;
