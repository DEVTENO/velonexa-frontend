import { Switch } from "@/components/ui/switch";
import React from "react";

const SwitchPrivacy: React.FC = () => {
  return (
    <>
      <Switch className="w-[4.063rem] h-[1.813rem] rounded-[1.188rem] p-[0.375rem] data-[state=checked]:bg-privacySwitchColor" />
    </>
  );
};

export default SwitchPrivacy;
