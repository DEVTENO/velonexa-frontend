import React from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

const ChangeImageBtn: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBtn = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="relative">
        <Button
          onClick={handleBtn}
          className="flex  justify-center gap-x-[10px] border w-[10.625rem] h-[2.688rem] rounded-[0.438rem] active-link my-[4.563rem] hover:bg-borderButton"
        >
          <p className="text-sm font-medium">Change Image</p>
          <Pencil size={20} />
        </Button>
        <Input
          className="absolute invisible top-[4.54rem] w-[10.625rem] h-[2.688rem] rounded-[0.438rem]"
          id="picture"
          type="file"
          ref={fileInputRef}
        />
      </div>
    </>
  );
};

export default ChangeImageBtn;

// hover:bg-borderButton
