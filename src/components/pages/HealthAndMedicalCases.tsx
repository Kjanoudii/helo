import React from "react";
import Image from "next/image";
import shield from "../../images/icons/icons8-plus-shield-64.png";
import VideoComponent from "../widgets/videoContainer";
import stethoscope from "../../images/icons/icons8-stethoscope-50.png";
import ImageComponent from "@/components/widgets/ImageComponent";
import DoctorsOpinion from "../../images/health&medical-cases/doctors-giving-their-opinion.png";
import DoctorWalking from "../../images/health&medical-cases/back-view-doctor-senior-woman-walking.png";
import collegeStudents from "../../images/health&medical-cases/college-students-hall.png";
export default function HealthAndMedicalCases() {
  return (
    <section id="Health-Care" className="h-full bg-white px-4 py-[1.4rem]">
      <div className="flex justify-center gap-3">
        <p className="bg-green-100 rounded-lg text-[#1BBF7D] flex gap-2 items-center justify-center w-[9.45rem] h-[2.4rem] font-normal  text-[1.1rem] ">
          <Image
            src={shield}
            alt=" shield icon"
            className="w-[1.23rem] h-[22px]"
          />{" "}
          Health Care
        </p>

        <p className="flex bg-gray-50 rounded-lg gap-2 text-[#8E8E8E] items-center justify-center w-[9.45rem] h-[2.4rem] font-normal  text-[1.1rem]">
          <Image
            src={stethoscope}
            alt=" stethoscope icon"
            className="w-[1.13rem] h-[15px]"
          />{" "}
          Medical Class
        </p>
      </div>
      <section className="flex flex-col lg:flex-row  justify-center gap-8 mt-10">
        <VideoComponent
          width={`lg:w-[32.375rem] `}
          text={`Eating Red Meat May Increase Type 2 Diabetes
            Risk, Study Suggests`}
          height="h-[19.15rem]"
          date="Oct 23, 2023"
        />

        <ImageComponent
          img={DoctorsOpinion.src}
          width={`lg:w-[32.375rem]`}
          height="h-[19.15rem]"
          text={`2 probiotics may help reduce high blood pressure`}
          date={`Oct 23, 2023`}
        />
      </section>
      <section className="flex flex-col lg:flex-row justify-center gap-8 mt-10">
        <ImageComponent
          img={DoctorWalking.src}
          width="lg:w-[21rem]"
          height="h-[13.75rem]"
          text=" New Drug Offered An Alzheimer’s ‘Breakthrough’, A Study Shows"
          date="Oct 23, 2023"
        />

        <VideoComponent
          width={`w-[21rem]`}
          height={`h-[13.75rem]`}
          text={`5 Habits To Help You Find 
           Happiness Within Yourself`}
          date="Oct 23, 2023"
        />
        <ImageComponent
          img={collegeStudents.src}
          width="w-[21rem]"
          height="h-[13.75rem]"
          text="The Latest Technologies In A Study Shows UAE Hospitals"
          date="Oct 23, 2023"
        />
      </section>
      <div
        className="mx-auto flex justify-center items-center my-7 text-center rounded-lg bg-[#F5F5F5] w-[6.56rem] h-[2.187rem] text-[14.7px]
         text-green-500 "
      >
        <p>Explore</p>
      </div>
    </section>
  );
}
