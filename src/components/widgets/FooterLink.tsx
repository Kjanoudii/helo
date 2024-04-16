import React, { ReactNode } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface FooterLinkProps {
  children: ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
  return (
    <div className="text-white cursor-pointer px-2 justify-between
     hover:bg-gray-500 items-center flex   
     w-[11.3rem] h-[2.4rem] text-sm rounded-lg">
      <p>{children}</p>
      <AiOutlineArrowRight size={20} />
    </div>
  );
};

export default FooterLink;
