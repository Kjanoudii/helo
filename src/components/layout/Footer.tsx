import React from "react";
import Image from "next/image";
import heloLogo from "../../images/logos/helo-logo.png";
import FooterLinks from "../widgets/FooterLink";
// import footerLinks from '../../data/data'
export default function Footer() {
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
    "Terms & Conditions",
    "Privacy Policy",
    "Site map",
    "Contact Us",
    "Careers",
  ];
  return (
    <div className="flex flex-col justify-between bg-[#00205B] h-full lg:h-[551px]">
      <div className="flex flex-col lg:flex-row justify-stretch gap-32 flex-grow">
        <section className="px-12 py-14">
          <Image src={heloLogo} alt="helo logo" className="w-[9.4rem] pb-8" />
          <p className="w-[323.4px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to give
            an impression of the finished document. The text is in
          </p>
        </section>

        <section className="lg:mt-12 text-white h-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-y-3 lg:gap-x-14">
            <h4 className="ml-3 text-[1.1rem] pb-3">Quick Links</h4>
            <h4 className="pb-3 hidden lg:inline"></h4>
            <h4 className="ml-3 text-[1.1rem] pb-3">Quick Links</h4>
            {footerLinks.map((item, index) => (
              <FooterLinks key={index}>{item}</FooterLinks>
            ))}
          </div>
        </section>
      </div>
      <footer className="h-full lg:h-[48.5px] bg-[#1F5FD0] text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center px-5 h-full ">
          <p className="m-0 ">
            © 2023 RGB All rights reserved. Designed & Developed by EGV
          </p>
          <p className="m-0">Copyrights © RGB, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
