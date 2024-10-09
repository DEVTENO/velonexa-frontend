import React from "react";
import Image from "next/image";

type showPostingOverlayProps = {
  AlertDialogDescription: any;
  Images: any;
};

//Komponen ini untuk menampilkan gambar beserta tombol edit yang berasal dari src\components\fragments\ChooseFile.tsx
export const PostingOverlay: React.FC<showPostingOverlayProps> = ({
  AlertDialogDescription,
  Images,
}) => {
  return (
    <div>
      <AlertDialogDescription>
        <img src={Images} />
      </AlertDialogDescription>
    </div>
  );
};
