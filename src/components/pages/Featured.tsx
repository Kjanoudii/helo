import React from 'react'
import Image from 'next/image';
import healthEx from "../../images/featured/Group 2046.png";
import inDepth from "../../images/featured/Group 2044.png";
import HeartDisease from "../../images/featured/Group 2089.png";
import ofABattle from "../../images/featured/Group 2046.png";

export default function Featured() {
  return (
    <section>
      <h4 className="text-lg text-white mt-10 mb-5 ml-3 font-medium">
        Featured
      </h4>

      <div className="flex flex-col lg:flex-row gap-4">
        <Image width={315} src={ofABattle} alt="" />
        <Image width={315} src={inDepth} alt="" />
        <Image width={315} src={healthEx} alt="" />
        <Image width={315} src={HeartDisease} alt="" />
      </div>
    </section>
  );
}
