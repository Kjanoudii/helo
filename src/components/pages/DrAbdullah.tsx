import React from "react";
import Image from "next/image";
import Doctor from "../../images/doctors/1640758580ABDULLAHALHAJIWEB copy.png";
import Button from "../buttons/Button";

export default function DrAbdullah() {
  return (
    <div className="h-full lg:h-[312px] bg-[#1BBF7D] flex flex-col lg:flex-row  overflow-visible relative ">
      <div className="h-full text-[2.18rem] mx-auto font-bold py-6 text-center ">
        <h3 className="text-white py-2">
          Got A Back Pain Or Need Special Treatments?
        </h3>
        <p className="text-[1.53rem] font-medium text-white">
          DR. Abdullah Alhaji Discussing Back Pain And Its Treatments
        </p>
        <Button className="bg-white">
          <p className="text-green-500">Watch Videos</p>
        </Button>
      </div>
      <Image
        src={Doctor}
        alt=""
        className="w-[21rem] lg:absolute bottom-0  
           z-30"
      />
    </div>
  );
}
