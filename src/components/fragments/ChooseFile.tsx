import React, { useEffect, useState } from "react";

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
import { PostingOverlay } from "./PostingOverlay";
import { ShowFilePond } from "./ShowFilePond";
import * as FilePond from "filepond";

export const ChooseFile = () => {
  const [isHoveredFeed, setIsHoveredFeed] = useState<boolean>(false);
  const [isReelsActive, setIsReelsActive] = useState<boolean>(false);
  const [showFilePond, setShowFilePond] = useState<boolean>(false);
  const [showPostingOverlay, setShowPostingOverlay] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPostingOverlay(true);
  };

  function handleReelsActive() {
    setIsReelsActive(true);
    setIsHoveredFeed(false);

    setTimeout(() => {
      setShowFilePond(true);
    }, 2000);
  }

  function handleFeedsActive() {
    setIsHoveredFeed(true);
    setIsReelsActive(false);
    setTimeout(() => {
      setShowFilePond(true);
    }, 2000);
  }

  function allDeactivateButton() {
    setIsReelsActive(false);
    setIsHoveredFeed(false);
    setShowFilePond(false);
    setFiles([]);
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="flex justify-between flex-col">
          Open
        </AlertDialogTrigger>

        <AlertDialogContent className=" grid grid-flow-col-dense">
          <AlertDialogHeader className="">
            <AlertDialogTitle className="flex m-auto h-[270px] transition-all  duration-300">
              {isReelsActive
                ? "Choose Your Reels"
                : isHoveredFeed
                ? "Choose Your Feeds"
                : "Choose One"}
            </AlertDialogTitle>

            <>
              {files.length > 0 ? (
                <>
                  <PostingOverlay
                    Images={files}
                    AlertDialogDescription={AlertDialogDescription}
                  />
                  {(() => {
                    console.log(files);
                    return null; // Atau return elemen JSX jika diperlukan
                  })()}
                </>
              ) : (
                <ShowFilePond
                  showFilePond={showFilePond}
                  isHoveredFeed={isHoveredFeed}
                  isReelsActive={isReelsActive}
                  setFiles={setFiles}
                  files={files}
                  AlertDialogDescription={AlertDialogDescription}
                  allDeactivateButton={allDeactivateButton}
                  handleFeedsActive={handleFeedsActive}
                  handleReelsActive={handleReelsActive}
                />
              )}
            </>
          </AlertDialogHeader>

          <AlertDialogFooter
            className={`flex absolute ${
              showFilePond ? "top-[600px]" : "top-[250px]"
            }  ml-20 gap-[220px] right-[40px] flex-grow justify-evenly `}
          >
            <AlertDialogCancel
              onClick={allDeactivateButton}
              className="mr-[40px] flex"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleContinue}
              className="flex right-6 ml-[50px]"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
