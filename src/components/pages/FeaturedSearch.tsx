import React from "react";
import Image from "next/image";

import motherDaughter from "../../images/featured research/mother-with-daughter-airport.png";
import FeaturedSearchCom from "../widgets/FeaturedSearchCom";
import cosmetology from "../../images/featured research/cosmetology-doctor-patien.png";
import mentalRelief from "../../images/featured research/man-enjoying-rural-surroundings.png";
import SkinTrearment from "../../images/featured research/couple-hugging-looking-city-from-balcony.png";
import fertilotySolImg from "../../images/featured research/happy-couple-talking-while-using-laptop-their-new-apartment.png";
import cardioVasImg from "../../images/featured research/smiley-colleagues-chatting-work-full-shot.png";
import Link from "../buttons/Link";

const FeaturedSearch = () => {
  return (
    <div className="h-full pb-20">
      <section
        className="px-4 lg:px-32 grid gris-cols-1
       lg:grid-cols-3 mt-16 gap-x-0 gap-y-4"
      >
        <FeaturedSearchCom
          img={motherDaughter.src}
          type="Health"
          title=" Social Connection Can Help To"
        />

        <FeaturedSearchCom
          img={cosmetology.src}
          type="Beauty"
          title="  Beauty Treatments"
        />
        <FeaturedSearchCom
          img={mentalRelief.src}
          type="Health"
          title="Mental Relief"
        />
        <FeaturedSearchCom
          img={SkinTrearment.src}
          type="Treatments"
          title="Skin Treatments"
        />
        <FeaturedSearchCom
          img={fertilotySolImg.src}
          type="Medical Cases"
          title="Fertility Solutions "
        />

        <FeaturedSearchCom
          img={cardioVasImg.src}
          type="Diseases"
          title="CardioVascular Disease "
        />
      </section>
      <Link className="text-green-500">Discover More</Link>
    </div>
  );
};

export default FeaturedSearch;
