import React from "react";

const UpdateProfile: React.FC = () => {
  return (
    <form>
      <div className="w-[45.875rem] h-[26.063rem] py-[2.313rem] pl-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.688rem]">
        <div className="flex flex-col mb-[2.063rem]">
          <p className="font-medium text-[1.188rem]">Profile</p>
          <p className="font-normal text-[0.938rem] text-secondaryText">Update your account settings</p>
        </div>
        <div className="w-[40.5rem] h-[16rem]">
          <input className="w-[40.5rem] h-[3.25rem] mb-4 rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder outline-0 placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" type="text" placeholder="Bio" />
          <input className="w-[40.5rem] h-[3.25rem] mb-4 rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder outline-0 placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" type="text" placeholder="Name" />
          <input className="w-[40.5rem] h-[3.25rem] mb-4 rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder outline-0 placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" type="text" placeholder="Username" />
          <input className="w-[40.5rem] h-[3.25rem] rounded-[0.438rem] bg-inputProfileBg border border-inputProfileBorder outline-0 placeholder-placeholderProfile placeholder:italic pl-[1.25rem]" type="text" placeholder="Gender" />
        </div>
      </div>
      <button>
        <div className="border border-updateBtn bg-updateButtonBg w-[9.75rem] h-[2.688rem] ml-[36.125rem] mt-4 rounded-[0.813rem] text-updateBtn flex items-center justify-center">Update</div>
      </button>
    </form>
  );
};

export default UpdateProfile;
