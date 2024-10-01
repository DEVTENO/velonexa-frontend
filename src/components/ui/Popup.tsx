import React, { useState, useEffect } from "react";

interface ComponentPopupProps {
  title?: string;
  show: boolean;
  onClose: (show: boolean) => void;
  children: React.ReactNode;
}

const ComponentPopup: React.FC<ComponentPopupProps> = ({
  title,
  show,
  onClose,
  children,
}) => {
  const [isvisible, setIsVisible] = useState<boolean>(false);
  const [visibilityClass, setVisibilityClass] = useState<string>(
    "invisible opacity-0"
  );

  const closeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.dataset.svOverlay === "true" || target.dataset) {
      setIsVisible(false);
      onClose(false);
    }
  };

  useEffect(() => {
    setIsVisible(show);
    setVisibilityClass(show ? "visible opacity-100" : "invisible opacity-0");
  }, [show]);

  return (
    <>
      {isvisible && (
        <>
          <div
            onClick={closeHandler}
            className={`${visibilityClass} fixed inset-0`}
          ></div>
        </>
      )}
    </>
  );
};

export default ComponentPopup;
