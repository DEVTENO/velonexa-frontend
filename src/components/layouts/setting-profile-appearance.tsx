import React from "react";
import { SelectScrollable } from "../ui/SelectFont";

const AppearanceLayout: React.FC = () => {
  return (
    <section className="flex flex-col mt-[7.5rem] max-h-[34.688rem] max-w-[45.875rem]">
      <div className="max-w-[45.875rem] max-h-[31rem] py-[2.313rem] px-[2.563rem] bg-settingUiBg border border-settingUiBorder rounded-[1.938rem]">
        <div className="max-w-[40.75rem] max-h-[26.375rem]">
          <div className="max-w-[34.563rem] max-h-[4.813rem]">
            <p className="font-medium text-lg">Appearance</p>
            <p className="text-secondaryText text-sm">Customisze the appearance of the app. Automatically switch between day and night themes</p>
          </div>
        </div>
        <div className="w-full h-[5.125rem] my-[2.063rem]">
          <p className="text-sm font-medium mb-2.5">Font</p>
          <SelectScrollable />
        </div>
        <div>
          <p className="text-sm font-medium mb-[0.625rem]">Theme</p>
          <div className="w-full h-[10.625rem]"></div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default AppearanceLayout;
