import MotionDiv from "../MotionDiv";
import { ReactNode } from "react";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  text?: string;
  icon?: ReactNode;
  fontWeight?: string | boolean;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  ref?: React.RefObject<HTMLAnchorElement>;
};

const NavLink = (props: NavLinkProps) => {
  const { href, text, icon, fontWeight, onClick, isOpen, ref } = props;
  return (
    <MotionDiv
      key={"Navigation"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ bounce: 0, duration: 0 }}
    >
      {/* desktop */}
      <Link
        onClick={onClick}
        href={href}
        ref={ref}
        className={`xl:flex hidden hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14   ${
          isOpen ? "px-3 2xl:justify-center 2xl:w-14 m-auto " : "px-4"
        } items-center gap-5`}
      >
        {icon}
        {isOpen ? null : text}
      </Link>
      {/* mobbile */}
      <Link
        onClick={onClick}
        href={href}
        ref={ref}
        className={`xl:hidden  hover:bg-gray-200 ${fontWeight} rounded-lg w-full h-14 flex justify-start px-4 items-center gap-5`}
      >
        {icon}
      </Link>
    </MotionDiv>
  );
};

export default NavLink;
