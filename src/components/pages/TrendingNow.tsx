import React from 'react'
import Image from 'next/image';
import journeyIntoBattle from "../../images/trending/Group 2052.png";
import DiabetesLifeStyle from "../../images/trending/Group 2053.png";
import Robotic from "../../images/trending/Group 2049.png";
import Plastic from "../../images/trending/Group 2086.png";
// import journeyIntoBattle from "../../images/trending/Group 2052.png";

export default function TrendingNow() {
  return (
    <section id="Trending-Topics">
      <h4 className="text-lg text-white mb-5 ml-3 font-medium">Trending Now</h4>

      <div className="flex flex-col lg:flex-row gap-4">
        <Image width={290} src={journeyIntoBattle} alt="" />
        <Image width={290} src={DiabetesLifeStyle} alt="" />
        <Image width={290} src={Robotic} alt="" />
        <Image width={290} src={Plastic} alt="" />
      </div>
    </section>
  );
}
