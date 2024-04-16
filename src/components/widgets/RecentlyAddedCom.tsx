import React from "react";
import Image from "next/image";
import VideoLayer from "./VideoLayer";
import teamWork from "../../images/recently-added/people-working-as-team-company.png";
interface Props {
  vid?: boolean;
  img?: string;
  type: string;
  text: string;
  date: string;

  //   width: string;
  //   height?: string;
}
const RecentlyAddedCom: React.FC<Props> = ({ img, type, text, date, vid }) => {
  return (
    <div className="w-[21rem] text-left">
      <div
        className="w-[21rem] h-[13.75rem] rounded-lg
            bg-slate-400 flex justify-center relative"
      >
        {vid && <VideoLayer />}

        {img && <Image src={img} alt="" width={336} height={220} />}
      </div>
      <p className="text-[1.1rem] text-green-500 mt-4">{type}</p>
      <h3 className="font-medium text-[#00205B] text-[1.3rem] py-3">{text}</h3>
      <p className="text-[#8E8E8E] text-sm">{date}</p>
    </div>
  );
};
export default RecentlyAddedCom;
