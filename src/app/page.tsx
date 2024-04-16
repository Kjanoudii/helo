import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";

import SearchSection from "@/components/pages/SearchSection";
import HealthAndMedicalCases from "@/components/pages/HealthAndMedicalCases";
import WellBeing from "@/components/pages/WellBeing";
import DrAbdullah from "@/components/pages/DrAbdullah";
import TrendingNow from "@/components/pages/TrendingNow";
import VideoLayer from "@/components/widgets/VideoLayer";
import RecentlyAdded from "@/components/pages/RecentlyAdded";
import Featured from "@/components/pages/Featured";
import FeaturedTags from "@/components/pages/FeaturedTags";
import Footer from "../components/layout/Footer";
import ButtonLink from "../components/buttons/Link";
import { Strip } from "@/components/widgets/Strip";
import FeaturedSearch from "@/components/pages/FeaturedSearch";
import MedicalExibition from "@/components/pages/MedicalExibition";
import MedicalConditionsCard from "@/components/widgets/MedicalConditionsCard";
import featuredImg from "../images/featured-tags/census-concept-photographed-city-building.png";
export default function Home() {
  return (
    <>
      <header className="test text-gray-50">
        <Header />

        <Navbar />
      </header>
      <div className="home-page-banner px-4 ">
        <h3 className="text-4xl text-white pt-44 font-medium">
          Discover A Gateway For Your
          <br />
          Health & Longevity
        </h3>

        <Link
          href="/"
          className="mt-8 flex gap-10 bg-blue-600
           text-white text-xs lg:text-sm w-[10rem] px-5 lg:px-5 lg:w-[14rem] h-10 lg:h-16 
        rounded-2xl items-center justify-center"
        >
          <p className="font-medium">Continue Watching </p>
          <AiOutlineArrowRight size={35} />
        </Link>
      </div>
      <div
        className="bg-[#00205B] lg:pt-8 pt-28 px-4
       h-full lg:trending-featured-container pb-5 "
      >

        <TrendingNow/>
        <Featured />
        <ButtonLink>Discover More</ButtonLink>
      </div>
      <Strip text=" Search For Diseases & Conditions" />
      <SearchSection />
      <HealthAndMedicalCases />
      <WellBeing />
      <DrAbdullah />
      <RecentlyAdded />
      <Strip text=" Featured Research" />
      <FeaturedSearch />
      <MedicalExibition />
      <FeaturedTags />
      <Footer />
    </>
  );
}
