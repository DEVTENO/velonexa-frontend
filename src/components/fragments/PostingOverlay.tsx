import React from "react";
import Image from "next/image";
import { TriangleAlert } from "lucide-react";

type showPostingOverlayProps = {
  AlertDialogDescription: any;
  Images: any;
};

//Komponen ini untuk menampilkan gambar beserta tombol edit yang berasal dari src\components\fragments\ChooseFile.tsx
export const PostingOverlay: React.FC<showPostingOverlayProps> = ({
  AlertDialogDescription,
  Images,
}) => {
  const brokenImage = (
    <Image
      src="/broken-image.png"
      className=""
      width={200}
      height={200}
      alt="Broken image icons created by JessHG - Flaticon"
    />
  );
  return (
    <div>
      <AlertDialogDescription>
        {Images.length > 0 ? (
          <div className="relative bottom-[150px] m-auto items-center flex flex-col">
            {brokenImage}
            <div className="flex text-lg font-semibold gap-0.5">
              {" "}
              <TriangleAlert
                color="#f50000"
                strokeWidth={1.5}
                absoluteStrokeWidth
              />
              <p className="text-red-400 flex relative bottom-0.5">
                File gambarmu bermasalah, silahkan upload ulang.
              </p>
            </div>
          </div>
        ) : (
          <img src={Images} />
        )}
      </AlertDialogDescription>
    </div>
  );
};
