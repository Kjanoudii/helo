import React from "react";
import VideoLayer from "../widgets/VideoLayer";
import Image from "next/image";
import collegeFriends from "../../images/recently-added/close-up-friends-hanging-out.png";
import teamWork from "../../images/recently-added/people-working-as-team-company.png";
import RecentlyAddedCom from "../widgets/RecentlyAddedCom";
import Button from "../buttons/Button";
export default function RecentlyAdded() {
  return (
    <div className="h-full lg:h-[600px] bg-white">
      <section className="flex flex-col text-center mt-16 lg:p-0 px-3">
        <h2 className="text-green-500 text-[1.53rem] font-medium">
          Recently Added
        </h2>
        <section className="flex flex-col lg:flex-row justify-center gap-8 mt-16">
          <RecentlyAddedCom
            img={collegeFriends.src}
            type="Health"
            text="Social Connection Can Help To Recover From Stress"
            date="Oct 23, 2023"
          />

          <RecentlyAddedCom
            vid={true}
            type="Health"
            text="5 Ways Sports Can Transform Your Health"
            date="Oct 23, 2023"
          />
          <RecentlyAddedCom
            img={teamWork.src}
            type="Health"
            text="The Latest Discoveries In Beauty Surgeries"
            date="Oct 23, 2023"
          />
        </section>
        <div className="mt-2">
          <Button className="text-green-500 bg-[#F5F5F5]">Discover More</Button>
        </div>
      </section>
    </div>
  );
}
