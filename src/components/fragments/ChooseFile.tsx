import { useState } from "react";
import { Feeds } from "./Feeds";
import { Reels } from "./Reels";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const ChooseFile = () => {
  const [isHoveredFeed, setIsHoveredFeed] = useState<boolean>(false);
  const [isReelsActive, setIsReelsActive] = useState<boolean>(false);

  function handleReelsActive() {
    setIsHoveredFeed(false);
    setIsReelsActive(true);
  }

  function handleFeedsActive() {
    setIsReelsActive(false);
    setIsHoveredFeed(true);
  }

  function allDeactivateButton() {
    setIsReelsActive(false);
    setIsHoveredFeed(false);
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="flex justify-between flex-col">
          Open
        </AlertDialogTrigger>
        <AlertDialogContent className=" grid grid-flow-col-dense">
          <AlertDialogHeader className="">
            <AlertDialogTitle className="flex m-auto h-[270px]">
              {isReelsActive
                ? "Drag & Drop Your Reels"
                : isHoveredFeed
                ? "Drag & Drop Your Feeds"
                : "Choose One"}
            </AlertDialogTitle>
            <AlertDialogDescription
              onClick={handleReelsActive}
              className="absolute  top-16 left-5"
            >
              <Reels
                className={`cursor-pointer hover:bg-[#3971FF]  border rounded-xl 
                   ${isReelsActive ? "bg-[#3971FF]  text-white" : ""}`}
                fill={`${isReelsActive ? "#ffffff" : "#CFCFCF"}`}
                isActive={isReelsActive}
              />
            </AlertDialogDescription>
            <AlertDialogDescription
              className=" absolute top-16 right-5"
              onClick={handleFeedsActive}
            >
              <Feeds
                className={`cursor-pointer hover:bg-[#3971FF] ${
                  isHoveredFeed ? " bg-[#3971FF] text-white" : ""
                } rounded-xl`}
                fill={`${isHoveredFeed ? "#ffffff" : "#CFCFCF"}`}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex absolute top-[250px] ml-20 gap-[220px] right-[40px] flex-grow justify-evenly ">
            <AlertDialogCancel
              onClick={allDeactivateButton}
              className="mr-[40px] flex"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="flex right-6 ml-[50px]">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
