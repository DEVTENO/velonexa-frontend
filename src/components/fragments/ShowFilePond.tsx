import React from "react";
import { Feeds } from "./Feeds";
import { Reels } from "./Reels";
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

type showFilePondProps = {
  showFilePond: boolean;
  isReelsActive: boolean;
  isHoveredFeed: boolean;
  setFiles: any;
  files: any;
  AlertDialogDescription: any;

  allDeactivateButton: () => void;
  handleFeedsActive: () => void;
  handleReelsActive: () => void;
};

type ExProps = {
  allDeactivateButton: () => void;
};

// Props didapat dari komponen ShowFilePond yang berasal dari ChooseFile.tsx//
export const EX: React.FC<ExProps> = ({ allDeactivateButton }) => {
  return (
    <X
      className=" relative  hover:bg-red-100 cursor-pointer ml-auto mr-10 bottom-3"
      onClick={allDeactivateButton}
      color="red"
      size={36}
      strokeWidth={2.5}
    />
  );
};

// Kode ini digunakan pada src\components\fragments\ChooseFile.tsx

export const ShowFilePond: React.FC<showFilePondProps> = ({
  showFilePond,
  isHoveredFeed,
  isReelsActive,
  setFiles,
  files,
  AlertDialogDescription,
  allDeactivateButton,
  handleFeedsActive,
  handleReelsActive,
}) => {
  // useEffect(() => {
  //   const pond = FilePond.create({});
  // });
  return (
    <>
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
                {/* //Props allDeactivateButton dilempar dari komponen
                ChooseFile.tsx */}

                <EX allDeactivateButton={allDeactivateButton} />

                {/* Komponen FilePond ini khusus untuk Reels */}
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
                {/* //Props allDeactivateButton dilempar dari komponen
                ChooseFile.tsx */}
                <EX allDeactivateButton={allDeactivateButton} />

                {/* Komponen FilePond ini khusus untuk Reels */}

                <FilePond
                  className="relative flex items-center mr-10"
                  files={files}
                  allowPaste={true}
                  onupdatefiles={setFiles}
                  allowMultiple={false}
                  allowFileTypeValidation={true}
                  acceptedFileTypes={["image/*"]}
                  stylePanelAspectRatio="1:1"
                  server={{
                    process: async (
                      fieldName,
                      file,
                      metadata,
                      load,
                      error,
                      progress,
                      abort
                    ) => {
                      try {
                        const formData = new FormData();
                        formData.append(fieldName, file, file.name);
                      } catch (error) {}
                    },
                  }}
                />
              </>
            )}
          </>
        )}
      </AlertDialogDescription>
    </>
  );
};
