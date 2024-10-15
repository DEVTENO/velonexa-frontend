"use client";
import Image from "next/image";
import { useState } from "react";
import Photoprofile from "../../assets/fotoprofile/photoprofile-recomendation.png";

function User() {
    const [Button, setButton] = useState(false);

    function handleButton() {
      setButton(!Button);
    }

  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center gap-[13px]">
          <div>
            <Image src={Photoprofile} />
          </div>
          <div>
            <p className="text-[13px] font-medium">Angeline_</p>
            <p className="text-[11px]">Started Following You</p>
          </div>
        </div>
        <div className="ml-[45px]">
          <button
            onClick={handleButton}
            className={`${
              !Button ? "bg-[#3971FF] text-white" : "text-[#3871FF] font-medium"
            }  text-[12px] w-[70px] h-[28px] rounded-[20px]`}
            href=""
          >
            {!Button ? "Follow" : "Unfollow"}
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
