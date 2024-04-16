import React from "react";
import VideoLayer from "./VideoLayer";

interface VideoContainerProps {
  text: string;
  date: string;
  width: string;
  height?: string;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  text,
  date,
  width,
  height,
}) => {
  height ? height : "";
  return (
    <div className={width}>
      <div
        className={`w-full ${height} rounded-lg bg-slate-400 flex justify-center relative`}
      >
        <VideoLayer />
      </div>
      <h3 className="font-medium text-[#00205B] text-[1.3rem] py-4">{text}</h3>
      <p className="text-[#8E8E8E] text-sm">{date}</p>
    </div>
  );
};

export default VideoContainer;
