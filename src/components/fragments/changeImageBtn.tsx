import React from "react";
import { Pencil } from "lucide-react";

const ChangeImageBtn: React.FC = () => {
  return (
    <button>
      <div className="flex flex-wrap justify-center gap-x-[10px] border w-[10.625rem] h-[2.688rem] items-center rounded-[0.438rem] active-link">
        <p className="text-sm font-medium">Change Image</p>
        <Pencil size={21} />
      </div>
    </button>
  );
};

export default ChangeImageBtn;
