import React from "react";
import Image from "next/image";
import rose from "../../images/icons/icons8-rose-24.png";
import heart from "../../images/icons/icons8-heart-plus-50.png";
import MedicalConditionsCard from "@/components/widgets/MedicalConditionsCard";
import cosmetology from "../../images/well-being/cosmetology-doctor-patien.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function WellBeing() {
  return (
    <section id="Well-Being" className="h-full lg:h-[591px]  bg-[#F5F5F5]">
      <div className="container py-6">
        <div className="flex justify-center gap-3 mt-4">
          <p
            className="bg-white rounded-lg text-[#00205B] flex gap-2 items-center 
          justify-center w-[9.45rem] h-[2.4rem] font-normal  text-[1.1rem] "
          >
            <Image
              src={heart}
              alt=" shield icon"
              className="w-[1.23rem] h-[22px]"
            />{" "}
            Well-Being
          </p>

          <p
            className="flex bg-gray-50 rounded-lg gap-2 text-[#8E8E8E]
             items-center justify-center w-[9.45rem] h-[2.4rem] font-normal
              text-[1.1rem]"
          >
            <Image
              src={rose}
              alt=" stethoscope icon"
              className="w-[1.13rem] h-[15px]"
            />{" "}
            Beauty
          </p>
        </div>
        <section className="flex flex-col lg:flex-row  gap-10">
          <div className="lg:ml-32 inline-block mx-1  text-[#00205B] mt-16">
            <h2 className="text-[#00205B] font-medium text-[1.5rem] w-[490]">
              Low-Calorie Mediterranean Diet Can Help You Lose Belly Fat And
              Reduce Health Risks
            </h2>
            <h5 className="lg:w-[28.7rem] mt-8 text-sm leading-6">
              Rich in colorful fruits and vegetables, healthy fats and lean
              proteins, a Mediterranean style of eating consistently earns
              accolades for itslong list of health benefits, including the
              prevention of heart disease and diabetes. Now, new research from
              Spain shows this way of eating, when combined with regular
              exercise and fewer calories, canslash dangerous belly fat in older
              folks while helping to preserve their muscle mass.
            </h5>
            <section className="flex gap-4 mt-4 justify-center items-center max-w-52">
              <div
                className="mx-auto flex justify-center items-center my-7 text-center
                 rounded-lg text-[#F5F5F5] w-[6.56rem] h-[2.187rem] text-[12.7px]
                bg-green-500 "
              >
                <p>Explore</p>
              </div>
              <div
                className="mx-auto flex justify-center items-center my-7 text-center 
                rounded-lg bg-white w-[7.875rem] h-[2.187rem] text-[12.7px]
                text-[#00205B] gap-3 "
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  color="dark blue"
                  className="w-[0.9rem] h-[1rem] duration-500 "
                />{" "}
                <p>Watch video</p>
              </div>
            </section>
          </div>
          <div className="flex max-w-[35rem] items-center relative container ">
            <div className="absolute ml-16 mt-10 mr-0 z-10">
              <MedicalConditionsCard />
            </div>
            <div
              className="w-[25.9rem] h-[26.9rem]  ml-auto mr-0
                 bg-[#E6E6E6] relative rounded-3xl flex justify-center "
            >
              <Image src={cosmetology} height={520} alt="" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
