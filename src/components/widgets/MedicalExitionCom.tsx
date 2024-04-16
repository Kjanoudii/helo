import React from "react";
import VideoLayer from "./VideoLayer";

interface Props {
  location: string;
  title: string;
  date: string;
}
const MedicalExitionCom = ({ location, title, date }: Props) => {
  return (
    <div
      className="lg:w-[32.4rem] mt-5 lg:mt-0
  h-[26.7rem] bg-blue-200 rounded-lg "
    >
      <div className="relative h-[18.725rem] w-full">
        <VideoLayer />
      </div>
      <section className="py-1 px-4">
        <div className="flex justify-between py-2 items-center">
          <p className="text-[#1BBF7D] text-[1.1rem]">{location}</p>
          <p className="text-white text-sm">{date}</p>
        </div>
        <h2 className=" pr-5 text-[21px] text-white font-medium">{title}</h2>
      </section>
    </div>
  );
};

export default MedicalExitionCom;
