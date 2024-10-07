import React, { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "/public/static/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import { X } from "lucide-react";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageTransform,
  FilePondPluginImageCrop,
  FilePondPluginImageTransform,
  FilePondPluginImageResize
);

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
import { PostingOverlay } from "./PostingOverlay";

export const ChooseFile = () => {
  const [isHoveredFeed, setIsHoveredFeed] = useState<boolean>(false);
  const [isReelsActive, setIsReelsActive] = useState<boolean>(false);
  const [showFilePond, setShowFilePond] = useState<boolean>(false);
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const [showPostingOverlay, setShowPostingOverlay] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showFilePond) {
      setShowFilePond(true);
      return;
    }
  };

  useEffect(() => {
    if (showFilePond) {
      setShowPostingOverlay(true);
    }
  }, [showFilePond]);

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
  }

  return (
    <>
      {!isContinue ? (
        <AlertDialog>
          <AlertDialogTrigger className="flex justify-between flex-col">
            Open
          </AlertDialogTrigger>
          <AlertDialogContent className=" grid grid-flow-col-dense transition-all">
            <AlertDialogHeader className="">
              <AlertDialogTitle className="flex m-auto h-[270px] bg-red-500 transition-all  duration-300">
                {isReelsActive
                  ? "Choose Your Reels"
                  : isHoveredFeed
                  ? "Choose Your Feeds"
                  : "Choose One"}
              </AlertDialogTitle>

              {!showFilePond && (
                <>
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
                        isHoveredFeed ? " bg-[#3971FF]" : ""
                      } rounded-xl`}
                      fill={`${isHoveredFeed ? "#ffffff" : "#CFCFCF"}`}
                    />
                  </AlertDialogDescription>
                </>
              )}

              <AlertDialogDescription className="relative bottom-[200px] left-5">
                {showFilePond && (
                  <>
                    {isReelsActive ? (
                      <>
                        <X
                          className=" relative  hover:bg-blue-500 cursor-pointer ml-auto mr-10 bottom-3"
                          onClick={allDeactivateButton}
                          color="red"
                          size={36}
                          strokeWidth={2.5}
                        />
                        <FilePond
                          className="relative flex items-center mr-10"
                          files={files}
                          allowPaste={true}
                          onupdatefiles={setFiles}
                          allowMultiple={false}
                          allowFileTypeValidation={true}
                          acceptedFileTypes={["video/*"]}
                          stylePanelAspectRatio="1:1"
                        />
                      </>
                    ) : (
                      <>
                        <X
                          className=" relative  hover:bg-red-100 cursor-pointer ml-auto mr-10 bottom-3"
                          onClick={allDeactivateButton}
                          color="red"
                          size={36}
                          strokeWidth={2.5}
                        />
                        <FilePond
                          className="relative flex items-center mr-10"
                          files={files}
                          allowPaste={true}
                          onupdatefiles={setFiles}
                          allowMultiple={false}
                          allowFileTypeValidation={true}
                          acceptedFileTypes={["image/*"]}
                          stylePanelAspectRatio="1:1"
                        />
                      </>
                    )}
                  </>
                )}
              </AlertDialogDescription>
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
              <AlertDialogAction onClick={handleContinue}>
                {showPostingOverlay ? (
                  <PostingOverlay handleClick={() => setIsContinue(true)} />
                ) : (
                  "Continue"
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <div className="absolute z-40 inset-0  w-full h-full flex flex-col justify-center items-center">
          <div className="absolute inset-0 -z-10 bg-black opacity-35 w-full h-screen"></div>
          <div className="w-1/2 h-[300px] bg-white z-10 text-black">
            anggep modal lain
          </div>
        </div>
      )}
    </>
  );
};
