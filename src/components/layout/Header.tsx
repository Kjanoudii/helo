import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
export default function Header() {
  return (
    <div className="flex  items-center h-full md:h-14 bg-blue-900 px-8">
      <div className="lg:text-sm flex-col md:flex-row text-xs flex justify-between  w-full">
        <div className="flex items-center gap-3 md:py-0 pb-4 ">
          <div className="flex gap-1 items-center">
            <AiOutlineMail className="text-white" size={15} />
            <p className="text-gray-50">sayhello@helo.com</p>
          </div>
          <div className="flex items-center gap-1">
            <BsTelephone className="text-white" size={15} />
            <p className="text-xs lg:text-sm">+971 65 889 00987</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <AiFillYoutube className="text-white" size={16} />
          <FaFacebookF className="text-white" size={16} />
          <AiOutlineInstagram className="text-white" size={16} />
          <input className="w-28 h-9 rounded-lg border-none " />
          <p className="lg:text-sm mg:text-xs">عربي</p>
        </div>
      </div>
    </div>
  );
}

