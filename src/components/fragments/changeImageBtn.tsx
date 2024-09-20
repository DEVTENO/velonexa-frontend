import React from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChangeImageBtn: React.FC = () => {
  return (
    <Button className="flex flex-wrap justify-center gap-x-[10px] border w-[10.625rem] h-[2.688rem] rounded-[0.438rem] active-link hover:bg-borderButton my-[4.563rem]">
      <p className="text-sm font-medium">Change Image</p>
      <Pencil size={20} />
    </Button>
  );
};

export default ChangeImageBtn;
