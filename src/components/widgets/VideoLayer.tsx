import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


export default function VideoLayer() {
  // let text;
  //   if (catalogUrl == null) {
  //     text = "";
  //   } else {
  //     text = "DOWNLOAD CATALOG";
  //   }


  /// make sure the parent has "relative" postion

  return (
    <div
      className="group-hover:h-full video-layer z-20 group flex 
    items-center justify-center "
    >
      <div
        className="w-[4.2rem] h-[4.2rem] rounded-full
               my-auto flex justify-center items-center bg-[#00205B]"
      >
        <FontAwesomeIcon
          icon={faPlay}
          color="white"
          className="w-[1.6rem] ml-1 h-[1.84] duration-500 "
        />
      </div>
    </div>
  );
}
