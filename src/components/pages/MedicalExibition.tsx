import React from "react";
import MedicalExitionCom from "../widgets/MedicalExitionCom";

const MedicalExibition = () => {
  return (
    <div className="h-full bg-[#00205B] lg:px-32 px-3 w-full  py-10">
      <h3 className="my-12 text-2xl text-white text-center block">
        Explore Latest Medical Exhibitions
      </h3>
      <section className="flex flex-col lg:flex-row justify-between ">
        <MedicalExitionCom
          location="Dubai, UAE"
          title="International Family Medicine Conference & Exhibition 2023"
          date="Oct 31 - Nov2, 2023"
        />

        <MedicalExitionCom
          location="Dubai, UAE"
          title="Where The World Of Healthcare Meets"
          date="Oct 31 - Nov2, 2023"
        />
      </section>
    </div>
  );
};

export default MedicalExibition;
