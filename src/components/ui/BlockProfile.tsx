import React from "react";
import { Button } from "./button";
import Image from "next/image";

type Profile = {
  image: string;
  name: string;
};

const BlockProfile: React.FC = () => {
  const blockedProfiles: Profile[] = [
    { image: "/user-profile.jpg", name: "Jokowi" },
    { image: "/user-profile.jpg", name: "Jokowi" },
    { image: "/user-profile.jpg", name: "Jokowi" },
  ];

  return (
    <>
      <div className="w-[45.875rem] h-[21.813rem] py-[2.313rem] px-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.938rem] ">
        <div className="w-[40.75rem] h-[17.188rem]">
          <p className="font-medium text-[1.188rem]">Block</p>
          <p className="text-base mt-[0.125rem] font-normal text-secondaryText">list of accounts you blocked</p>
          <div className="w-[40.75rem] h-[11.75rem] mt-[2.063rem] gap-y-4 flex flex-col">
            {blockedProfiles.map(({ image, name }) => (
              <div key={name} className="w-[40.75rem] h-[3.25rem] rounded-[0.438rem] px-[1.25rem] border flex flex-wrap justify-between border-unblockBorder items-center">
                <div className="flex flex-wrap">
                  <div className="relative overflow-hidden rounded-full" style={{ width: "23px", height: "23px" }}>
                    <Image alt="Profile Image" src={image} fill style={{ objectFit: "cover" }} />
                  </div>
                  <p className="ml-[0.625rem] text-unblockBorder italic">{name}</p>
                </div>
                <Button className="w-[4.688rem] h-[1.75rem] px-[0.969rem] py-[0.344rem] rounded-[0.5rem] text-[0.688rem] border border-unblockBorder bg-unblockBgBtn text-unblockBorder hover:bg-updateBtn hover:text-white hover:border-updateBtn">
                  unblock
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button type="submit" className="border border-updateBtn bg-updateButtonBg w-[9.75rem] h-[2.688rem] ml-[36.125rem] rounded-[0.813rem] mt-4 text-updateBtn hover:bg-updateBtn hover:text-white flex items-center justify-center">
        Update
      </Button>
    </>
  );
};

export default BlockProfile;
