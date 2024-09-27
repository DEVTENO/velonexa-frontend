"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
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
import { Plus } from "lucide-react";

export const ChooseFile = () => {
  const [isHoveredFeed, setIsHoveredFeed] = useState<boolean>(false);
  const [isReelsActive, setIsReelsActive] = useState<boolean>(false);
  const [showFilePond, setShowFilePond] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);

  const router = useRouter();

  const handleContinue = () => {
    router.push("/caption");
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

  return (
    <>
      {/* <FilePond
        files={files}
        allowPaste={true}
        onupdatefiles={setFiles}
        allowMultiple={false}
        allowFileTypeValidation={true}
        acceptedFileTypes={["video/*"]}
      /> */}
      <AlertDialog>
        <AlertDialogTrigger className="flex justify-center items-center flex-col border border-dashed border-[#E9E9E9] text-[#D3D3D3] size-[281px]">
          <Plus size={180} color="#E9E9E9" fill="#E9E9E9" />
          Create Media
        </AlertDialogTrigger>
        <AlertDialogContent className=" grid grid-flow-col-dense">
          <AlertDialogHeader className="">
            <AlertDialogTitle className="flex m-auto h-[270px] transition-all  duration-300">
              {isReelsActive
                ? "Drag & Drop Your Reels"
                : isHoveredFeed
                ? "Drag & Drop Your Feeds"
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
                    <FilePond
                      files={files}
                      allowPaste={true}
                      onupdatefiles={setFiles}
                      allowMultiple={false}
                      allowFileTypeValidation={true}
                      acceptedFileTypes={["video/*"]}
                    />
                  ) : (
                    <FilePond
                      files={files}
                      allowPaste={true}
                      onupdatefiles={setFiles}
                      allowMultiple={false}
                      allowFileTypeValidation={true}
                      acceptedFileTypes={["image/*"]}
                    />
                  )}
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex absolute top-[250px] ml-20 gap-[220px] right-[40px] flex-grow justify-evenly ">
            <AlertDialogCancel
              onClick={allDeactivateButton}
              className="mr-[40px] flex"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="flex right-6 ml-[50px]"
              onClick={handleContinue}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
