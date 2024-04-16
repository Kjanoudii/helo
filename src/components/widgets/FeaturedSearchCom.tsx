import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  type: string;
  title: string;
}
const FeaturedSearchCom = ({ img, type, title }: Props) => {
  return (
    <div className="w-[323.4px] h-[450px] overflow-hidden bg-[#F5F5F5] py-3">
      <Image
        className="block border border-b-yellow-500"
        src={img}
        alt=""
        width={323.4}
        height={400}
      />

      <p className="text-[1.1rem] text-green-500 mt-4">{type}</p>
      <h3 className="font-medium text-[#00205B] text-[1.3rem] py-3">{title}</h3>
    </div>
  );
};

export default FeaturedSearchCom;
