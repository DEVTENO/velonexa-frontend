import React from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangeImageBtn: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Button className="flex flex-wrap justify-center gap-x-[10px] border w-[10.625rem] h-[2.688rem] rounded-[0.438rem] active-link my-[4.563rem]">
          <p className="text-sm font-medium">Change Image</p>
          <Pencil size={20} />
        </Button>
        <Input className="absolute opacity-0 top-[4.54rem] w-[10.625rem] h-[2.688rem] rounded-[0.438rem]" id="picture" type="file" />
      </div>
    </>
  );
};

export default ChangeImageBtn;

// hover:bg-borderButton
