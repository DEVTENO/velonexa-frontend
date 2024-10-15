"use client";
import React, { useState } from "react";

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
import { Plus } from "lucide-react";

import { PostingOverlay } from "./PostingOverlay";
import { ShowFilePond } from "./ShowFilePond";

interface fileData {
  source: string;
  options: {
    type: string;
  };
}

export const ChooseFile = () => {
  const [isHoveredFeed, setIsHoveredFeed] = useState<boolean>(false);
  const [isReelsActive, setIsReelsActive] = useState<boolean>(false);
  const [showFilePond, setShowFilePond] = useState<boolean>(false);
  const [files, setFiles] = useState<fileData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateFiles = (fileItems: any[]) => {
    setFiles(
      fileItems.map((fileItem) => ({
        source: fileItem.serverId,
        options: { type: "local" },
      }))
    );
  };

  const handleUpload = async () => {
    try {
      const mockServerResponse = files.map((file) => ({
        source: `/uploads/${file.source}`,
        options: { type: "local" },
      }));
      setFiles(mockServerResponse);
    } catch (error) {
      setError("Upload Failed");
      console.error("Upload Error", error);
    }
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showFilePond) {
      setShowFilePond(true);
      return;
    }
  };

  function handleReelsActive() {
    setIsReelsActive(true);
    setIsHoveredFeed(false);
  }

  function handleFeedsActive() {
    setIsHoveredFeed(true);
    setIsReelsActive(false);
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
        <AlertDialogTrigger className="flex justify-center items-center flex-col border border-dashed border-[#E9E9E9] text-[#D3D3D3] size-[281px]">
          <Plus size={180} color="#E9E9E9" fill="#E9E9E9" />
          Create Media
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
