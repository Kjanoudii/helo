import React from 'react'
import Image from "next/image";
import LetterCard from "@/components/widgets/LetterCard";
import firstAid from "../../images/icons/icons8-first-aid-24.png";

export default function SearchSection() {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "#",
    ];
  return (
    <section className="lg:h-[29rem] bg-gray-100 font-medium h-full py-2">
      {/* <div
        className=" font-medium text-slate-50 text-2xl flex justify-center 
        items-center h-[3.6rem] bg-green-700"
      >
        Search For Diseases & Conditions{" "}
      </div> */}
      <section className="flex lg:ml-32 m-0 gap-[1.875rem] px-2">
        <section>
          <div
            className="flex flex-col lg:flex-row 
          gap-4 pt-[4.6rem] pb-[1.6rem] lg:items-center"
          >
            <input
              className="c-clear-border lg:w-[25rem] w-[15rem]
              rounded-lg px-3 h-9"
            />
            <button
              className="text-center bg-green-700 w-[6.6rem] px-1
              rounded-lg text-s text-white h-9 "
            >
              Search
            </button>
          </div>
          <p className="my-[1.6rem]">Or search by Letter</p>
          <section className="grid w-[22.6rem] lg:w-[32.6rem] lg:grid-cols-9 grid-cols-6 gap-y-2 gap-x-5">
            {letters.map((letter) => (
              <LetterCard letter={letter} key={letter} />
            ))}
          </section>
        </section>
        <section className="flex flex-col justify-end ">
          <div
            className="bg-white rounded-xl shadow-xl w-[11rem] 
            h-[11.6rem] flex flex-col pl-5 pt-3 gap-2"
          >
            <Image
              src={firstAid}
              alt="firt aid icons"
              className="w-[2.9rem] "
            />
            <h3 className="text-3xl font-medium">+12K</h3>
            <p className="text-sm">
              Medical Conditions
              <br />& Diseases Results
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
