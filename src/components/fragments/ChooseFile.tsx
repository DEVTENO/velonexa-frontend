import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  const [showPostingOverlay, setShowPostingOverlay] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);

  const router = useRouter();

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
  }

  const handleCancelOverlay = () => {
    setShowPostingOverlay(false); // Menyembunyikan PostingOverlay
  };

  return (
    <>
      {!showPostingOverlay && (
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
              <AlertDialogAction
                onClick={handleContinue}
                className="flex right-6 ml-[50px]"
              >
                Continue
                {showPostingOverlay && (
                  <PostingOverlay onCancel={handleCancelOverlay} />
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
