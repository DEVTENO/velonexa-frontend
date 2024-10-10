"use client";
import React from "react";
import Image from "next/image";
import FotoProfile from "../../assets/fotoprofile/photoprofile.png";
import DummyFoto from "../../assets/DummyFoto/dummyFoto.png";
import LikeIcon from "../../assets/icons/like";
import ShareIcon from "../../assets/icons/share";
import SaveIcon from "../../assets/icons/save";
import { useEffect } from "react";
interface Comment {
  ExpandOverlay: any,
  handleExpandOverlay: any,
  Like: any,
  handleLike: any
  id : number
}

const CommentOverlay = ({ExpandOverlay, handleExpandOverlay, Like, handleLike, id} : Comment) => {
  useEffect(() => {
    console.log('Data updated:', Like);
  }, [Like]);

  console.log('comentoverlay');
  console.log('data update', Like)
  return (
    <>
    {ExpandOverlay ? (
          <>
          <div className=" z-[1] flex justify-center inset-0 items-center fixed">
        <div
          onClick={handleExpandOverlay}
          className="overlay fixed bg-slate-600 inset-0 opacity-50"
        />
        
        <div className="flex gap-[28px] absolute bg-white px-[31px] py-[41px] z-[2] rounded-[20px]">
          <div className="col1 flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-[15px]">
                  <Image src={FotoProfile} alt="" />
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
              <Image src={DummyFoto} alt="" className="w-full" />

              <div className="flex justify-between">
                <div className="flex gap-[19px]">
                  <LikeIcon
                    className="cursor-pointer"
                    onClick={()=> handleLike(id)}
                    fill={Like ? "red" : "none"}
                    stroke={Like ? 0 : 100}
                  />
                  <ShareIcon />
                </div>
                <SaveIcon className="cursor-pointer" />
              </div>
            </div>

            <div className="w-[603px]">
              <p className="text-justify text-[14px]">
                Lorem ipsum dolor sit amet consectetur. At viverra justo ut
                consectetur varius nunc. Ac accumsan sem cras est sit neque.
                Sagittis imperdiet vitae id elementum. Quam congue tempor in
                orci augue senectus neque vel.
              </p>
            </div>
          </div>

          <div className="col2">
            col2
          </div>
        </div>
      </div>
          </>
        ) : null}
      
    </>
  );
};

export default CommentOverlay;
