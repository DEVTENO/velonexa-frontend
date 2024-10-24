"use client";
import FotoProfile from "../../assets/fotoprofile/photoprofile.png";
import DummyFoto from "../../assets/DummyFoto/dummyFoto.png";
import LikeIcon from "../../assets/icons/like";
import ShareIcon from "../../assets/icons/share";
import SaveIcon from "../../assets/icons/save";
import Image from "next/image";
import CommentOverlay from "./CommentOverlay";
import React, { useState } from "react";

interface LikedContent {
  handleExpandOverlay: any,
  handleLike: any,
  Like: any,
  TotalLike: number
  user: any
  address : any
  upload_time : any
  foto : any
  id : number
  ExpandOverlay : any
}

const FeedCard = ({ ExpandOverlay,handleExpandOverlay, handleLike, Like, TotalLike, user, address, upload_time, foto, id} : LikedContent) => {
console.log(Like);

  const [ExtendCaption, setExtendCaption] = useState(false);
  
  function handleExtendCaption() {
    setExtendCaption(!ExtendCaption);
  }

  return (
    <>
    {ExpandOverlay && <CommentOverlay 
    ExpandOverlay={ExpandOverlay}
          handleLike={handleLike}
          handleExpandOverlay={handleExpandOverlay}
          Like={Like}
          id={id}
          />}
    

      <div className="flex justify-center">
        <div className="max-w-[457.8px] flex flex-col gap-[15px] border-[1px] hover:border-[#3971FF] px-[35px] py-[44px] rounded-xl">

          <div className="flex justify-between items-center">
            <div className="flex gap-[15px]">
              <Image src={FotoProfile} alt=""/>
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-[16px]">{user}</p>
                  <li className="text-[11px] text-[#bababa]">{upload_time}</li>
                </div>
                <p className="text-[#5f5f5f] text-[12px]">
                  {address}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <span className="block w-[3px] h-[3px] bg-black rounded-xl"></span>
              <span className="block w-[3px] h-[3px] bg-black rounded-xl"></span>
              <span className="block w-[3px] h-[3px] bg-black rounded-xl"></span>
            </div>
          </div>
          <Image src={DummyFoto} alt="" className="w-full" />

          <div className="flex justify-between">
            <div className="flex gap-[19px]">
              <LikeIcon className="cursor-pointer" onClick={()=> handleLike(id)} fill={Like ? 'red' :"none" } stroke={Like ? 0 : 100}/>
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
           
            <p onClick={handleExpandOverlay} className="text-[#888888] text-[14px] font-medium italic underline cursor-pointer">
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
