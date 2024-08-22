import React from "react";

type LogoRegisterProps = {
  children: React.ReactNode;
  fontSize?: string;
  margin?: string;
};

const LogoRegister: React.FC<LogoRegisterProps> = ({
  children,
  fontSize = "text-[40px]",
  margin = "mt-[46px]",
}) => {
  return (
    <div
      className={`font-[900] tracking-[0.2rem] ${fontSize} ${margin} font-billabong`}
    >
      {children}
    </div>
  );
};

export default LogoRegister;
