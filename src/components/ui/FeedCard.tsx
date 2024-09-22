"use client";
import FotoProfile from "../../assets/fotoprofile/photoprofile.png";
import DummyFoto from "../../assets/DummyFoto/dummyFoto.png";
import LikeIcon from "../../assets/icons/like.tsx";
import ShareIcon from "../../assets/icons/share.tsx";
import SaveIcon from "../../assets/icons/save.tsx";
import Image from "next/image";
import { useState } from "react";

function FeedCard() {
  const [ExtendCaption, setExtendCaption] = useState(false);
  const [TotalLike, setTotalLike] = useState(0); 
  const [Like, setLike] = useState(false);

  function handleLike() {
    !Like ? setTotalLike(TotalLike + 1) : setTotalLike(TotalLike - 1)
    setLike(!Like)
  }

  function handleExtendCaption() {
    setExtendCaption(!ExtendCaption);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[457.8px] flex flex-col gap-[15px] border-[1px] hover:border-[#3971FF] px-[35px] py-[44px] rounded-xl">
          <div className="flex justify-between items-center w">
            <div className="flex gap-[15px]">
              <Image src={FotoProfile} />
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-[16px]">Useruser1</p>
                  <li className="text-[11px] text-[#bababa]">5s ago</li>
                </div>
                <p className="text-[#5f5f5f] text-[12px]">
                  Pamulang, Tangerang selatan, Banten
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <span className="block w-[3px] h-[3px] bg-black rounded-xl"></span>
              <span className="block w-[3px] h-[3px] bg-black rounded-xl"></span>
              <span className="block w-[3px] h-[3px] bg-black rounded-xl"></span>
            </div>
          </div>
          <Image src={DummyFoto} className="w-full" />

          <div className="flex justify-between">
            <div className="flex gap-[19px]">
              <LikeIcon className="cursor-pointer" onClick={handleLike} fill={!Like ? "none" : 'red'} stroke={Like ? 0 : 100}/>
              <ShareIcon />
            </div>
            <SaveIcon className="cursor-pointer" />
          </div>

          <div className="text-[#434343] flex flex-col gap-2">
            <p className="text-[17px] font-medium">{TotalLike} Like</p>
            <div className="relative">
              {!ExtendCaption && (
                <>
                  <p
                    onClick={handleExtendCaption}
                    className="underline font-medium text-[15px] absolute -bottom-0 -right-0 bg-white px-1 cursor-pointer"
                  >
                    See More ...
                  </p>
                </>
              )}
              <div>
                <p className="font-medium text-[16px]">Useruser1</p>
                <p
                  className={`text-justify text-[15px] ${
                    ExtendCaption ? ExtendCaption : " h-[46px] overflow-hidden"
                  }`}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime exercitationem vero voluptatibus atque libero nihil
                  pariatur voluptates, asperiores recusandae culpa delectus id
                  eos expedita, reprehenderit saepe aliquam quia earum vel?
                </p>
                {ExtendCaption && (
                  <>
                    <p
                      onClick={handleExtendCaption}
                      className="underline font-medium text-[15px] absolute -bottom-0 -right-0 bg-white px-1 cursor-pointer"
                    >
                      Less More ..
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#888888] text-[14px] font-medium italic underline cursor-pointer">
              See 1.000 Comment
            </p>
            <input
              className="bg-[#F8F8F8] text-[#9B9B9B] px-[20px] py-[11px] rounded-md focus:outline-1 focus:outline outline-slate-200"
              type="text"
              placeholder="Comment . . ."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedCard;
