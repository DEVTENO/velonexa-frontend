import { Switch } from "@/components/ui/switch";
import React from "react";
import { useState } from "react";

const SwitchPrivacy: React.FC = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsTrue(checked);
    console.log(!isTrue);
  };

  return (
    <>
      <Switch className="w-[4.063rem] h-[1.813rem] rounded-[1.188rem] p-[0.375rem] data-[state=checked]:bg-privacySwitchColor" checked={isTrue} onCheckedChange={handleSwitchChange} />
    </>
  );
};

export default SwitchPrivacy;
