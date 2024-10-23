import React from "react";
import Image from "next/image";
import { TriangleAlert } from "lucide-react";

type showPostingOverlayProps = {
  AlertDialogDescription: any;
  Images: any;
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
}) => {
  return (
    <div>
      <AlertDialogDescription>
        {Images.length > 0 ? (
          <img src={Images} />
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
