import React from "react";
import NavbarButtons from "../fragments/setting-profile-navbar-buttons";

const SettingProfileNavbar: React.FC = () => {
  return (
    <div className="mt-[7.5rem] mb-[3.5rem] mx-[1.563rem] min-h-[53rem] w-[15.563rem] border border-black rounded-[1.938rem]">
      <div className="border border-black min-h-[23.5rem] max-w-[14.25rem] ml-[0.313rem] mr-4 mt-[7.438rem] mb-[22.063rem] flex flex-col">
        <NavbarButtons />
      </div>
    </div>
  );
};

export default SettingProfileNavbar;
