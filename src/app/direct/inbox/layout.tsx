import React from "react";

const Layout = ({
  children,
  message,
}: {
  children: React.ReactNode;
  message: React.ReactNode;
}) => {
  return (
    <div className="flex justify-start items-start h-full overflow-hidden w-full ">
      <div className="">{children}</div>
      <div className="flex-1 h-full">{message}</div>
    </div>
  );
};

export default Layout;
