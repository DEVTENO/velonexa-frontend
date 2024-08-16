import React from "react";

type LogoRegisterProps = {
  children: React.ReactNode;
};

const LogoRegister: React.FC<LogoRegisterProps> = ({ children }) => {
  return (
    <div className="font-[900] tracking-[0.2rem] text-[40px] mt-[46px] font-billabong">
      {children}
    </div>
  );
};

export default LogoRegister;
