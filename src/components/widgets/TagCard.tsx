import React, { ReactNode } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface FooterLinkProps {
  children: ReactNode;
}

const TagCard:React.FC<FooterLinkProps> = ({ children }) => {
  return (
    <div
      className="text-white cursor-pointer px-2 lg:justify-between
     hover:bg-gray-100 items-center flex   
     w-[16.9rem] h-[56.7px] text-sm rounded-lg"
   >
      <p className="text-[1.1rem] text-blue-800 hover:underline">{children}</p>
      <AiOutlineArrowRight size={20} color="blue" />
    </div>
  );
};
    
  

export default TagCard