import React from "react";
import Image from "next/image";
import DoctorsOpinion from "../images/health&medical-cases/doctors-giving-their-opinion.png";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
interface VideoContainerProps {
  img: string;
  text: string;
  date: string;
  width: string;
  height?: string;
}
const ImageComponent: React.FC<VideoContainerProps> = ({
  img,
  text,
  date,
  width,
  height,
}) => {
  return (
    <div className={`${width}`}>
      <div
        className={`w-full ${height} rounded-lg
            flex justify-center`}
      >
        <Image
          src={img}
          alt=""
          width={400}
          height={400}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h3 className="font-medium text-[#00205B] text-[1.3rem] py-4">
        {text}
        <br />
      </h3>
      <p className="text-[#8E8E8E] text-sm">{date}</p>
    </div>
  );
};
export default ImageComponent;
