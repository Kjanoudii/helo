import React from 'react'
import firstAid from "../../images/icons/icons8-first-aid-24.png";
import Image from "next/image";

export default function MedicalConditionsCard() {
  return (
    <div
      className="bg-white rounded-xl shadow-xl lg:w-[11rem] 
            h-[11.6rem] flex flex-col  pl-5 pt-3 gap-2 "
    >
      <Image src={firstAid} alt="firt aid icons" className="w-[2.9rem] " />
      <h3 className="text-3xl font-medium">+12K</h3>
      <p className="text-sm">
        Medical Conditions
        <br />& Diseases Results
      </p>
    </div>
  );
}
