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
  const [isHoveredReels, setIsHoveredReels] = useState<boolean>(false);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="flex justify-between flex-nowrap">
          Open
        </AlertDialogTrigger>
        <AlertDialogContent
          onMouseEnter={() => setIsHoveredFeed(true)}
          onMouseLeave={() => setIsHoveredFeed(false)}
          className=" h-10 w-10 absolute top-10 ml-[600px]"
        >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <Feeds
                className={`cursor-pointer ${
                  isHoveredFeed ? "bg-[#3971FF] text-white" : "bg-white"
                } rounded-xl`}
                fill={`${isHoveredFeed ? "#ffffff" : "#CFCFCF"}`}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex justify-between flex-nowrap">
        <div
          onMouseEnter={() => setIsHoveredFeed(true)}
          onMouseLeave={() => setIsHoveredFeed(false)}
          className=" h-10 w-10 absolute top-10 ml-[600px]"
        >
          <Feeds
            className={`cursor-pointer ${
              isHoveredFeed ? "bg-[#3971FF] text-white" : "bg-white"
            } rounded-xl`}
            fill={`${isHoveredFeed ? "#ffffff" : "#CFCFCF"}`}
          />
        </div>
        <div
          onMouseEnter={() => setIsHoveredReels(true)}
          onMouseLeave={() => setIsHoveredReels(false)}
          className=" h-10 w-10 absolute top-10 ml-[800px]"
        >
          <Reels
            className={`cursor-pointer border ${
              isHoveredReels ? "bg-[#3971FF] text-white" : "bg-white"
            } rounded-xl`}
            fill={`${isHoveredReels ? "#ffffff" : "#CFCFCF"}`}
          />
        </div>
      </div>
    </>
  );
};
