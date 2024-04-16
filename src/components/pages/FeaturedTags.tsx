import React from "react";
import MedicalConditionsCard from "../widgets/MedicalConditionsCard";
import Image from "next/image";
import featuredImg from "../../images/featured-tags/census-concept-photographed-city-building.png";
import TagCard from "../widgets/TagCard";

const FeaturedTags = () => {
  const footerLinks = [
    "Trending Topics",
    "Health Care",
    "Well-Being",
    "Beauty",
    "Medical Cases",
    "Doctor Advises",
    "Events & Exhibitions",
    "The Journal",
    "Research Center",
    "Media Center",
  ];
  return (
    <div className="lg:h-[551px] h-full ">
      <h2 className="text-blue-900 font-medium text-center mt-10 text-[24.5px]">
        Featured Tags
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-end">
        <section className="mt-[82px] mb-0">
          <div className="flex flex-col lg:flex-row max-w-[35rem] items-center relative container ">
            <div className="lg:absolute lg:ml-96 mt-10 mr-0 z-10">
              <MedicalConditionsCard />
            </div>
            <div
              className="lg:w-[25.9rem] w-auto h-[26.9rem] lg:ml-10 mx-2
                 bg-[#E6E6E6] relative rounded-3xl flex justify-center "
            >
              <Image src={featuredImg} height={520} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-3 pt-4 gap-x-14 mr-24 mb-14 lg:ml-14">
            {footerLinks.map((item, index) => (
              <TagCard key={index}>{item}</TagCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedTags;
