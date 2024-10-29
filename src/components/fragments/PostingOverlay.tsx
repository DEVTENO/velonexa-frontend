import React from "react";
import Image from "next/image";
import { TriangleAlert, Turtle } from "lucide-react";
import { fileData } from "./ChooseFile";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { ShowFilePond } from "./ShowFilePond";
registerPlugin(FilePondPluginImagePreview);

type showPostingOverlayProps = {
  AlertDialogDescription: any;
  Images: any;
  files: fileData[];
};

// komponen ini digunakan pada postingoverlay.tsx dan showFilePond.tsx
export const BrokenImage: React.FC = () => {
  return (
    <Image
      src="/broken-image.png"
      width={200}
      height={200}
      alt="Broken image icons created by JessHG - Flaticon"
    />
  );
};
//Komponen ini untuk menampilkan gambar beserta tombol edit yang berasal dari src\components\fragments\ChooseFile.tsx
export const PostingOverlay: React.FC<showPostingOverlayProps> = ({
  AlertDialogDescription,
  Images,
  files,
}) => {
  return (
    <div>
      <AlertDialogDescription>
        {Images.length > 0 ? (
          <ShowFilePond previewFile={true} />
        ) : (
          <div className="relative bottom-[150px] m-auto items-center flex flex-col">
            <BrokenImage />
            <div className="flex text-lg font-semibold gap-0.5">
              {" "}
              <TriangleAlert
                color="#f50000"
                strokeWidth={1.5}
                absoluteStrokeWidth
              />
              <p className="text-[#f50000] flex relative bottom-0.5">
                File gambarmu bermasalah, silahkan upload ulang.
              </p>
            </div>
          </div>
        )}
      </AlertDialogDescription>
    </div>
  );
};
