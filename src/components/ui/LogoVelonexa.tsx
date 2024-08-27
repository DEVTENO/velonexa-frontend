import React from "react";

type LogoVelonexaProps = {
  children: React.ReactNode;
};

const LogoVelonexa: React.FC<LogoVelonexaProps> = ({ children }) => {
  return (
    <div className="font-[900] cursor-pointer tracking-[0.2rem] text-[40px] mt-[46px] font-billabong">
      {children}
    </div>
  );
};

export default LogoVelonexa;
