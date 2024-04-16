"use client";
import React, { useState } from "react";
import Image from "next/image";

import heloLgo from "../../images/logos/helo-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import searchIcon from "../../images/icons/icons8-search-50.png";

const navLinksRight = [
  {
    name: "Trending Topics ",
    href: "#Trending-Topics",
  },
  {
    name: "Health Care",
    href: "#Health-Care",
  },
  { name: "Well Being", href: "#Well-Being" },

  {
    name: "Beuty",
    href: "#Well-Being",
  },
];

const navLinksLeft = [
  {
    name: "Medical Cases ",
    href: "#medical-cases",
  },
  {
    name: "Doctors",
    href: "/about-us",
  },
  { name: "Events and Exihitions", href: "/catalogues" },

  {
    name: "The Journel",
    href: "/news-updates",
  },
];

const navLinks = [
  {
    name: "Trending Topics ",
    href: "/home",
  },
  {
    name: "Health Care",
    href: "/about-us",
  },
  { name: "Well Being", href: "/catalogues" },

  {
    name: "Beuty",
    href: "/news-updates",
  },
  {
    name: "Medical Cases ",
    href: "/home",
  },
  {
    name: "Doctors",
    href: "/about-us",
  },
  { name: "Events and Exihitions", href: "/catalogues" },

  {
    name: "The Journel",
    href: "/news-updates",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const [show, setShow] = useState(false);
  return (
    <>
      <main className="text-s pl-8 pr-4 justify-between items-center hidden lg:flex">
        {navLinksRight.map((item, index) => {
          const isActive = pathName === item.href;
          return (
            <Link
              key={index}
              className={`block lg:inline-block hover:text-blue-600 ${
                isActive ? "text-blue-600" : ""
              }`}
              href={item.href}
            >
              {item.name}
            </Link>
          );
        })}
        <Image src={heloLgo} width={151} alt="helo log" className="pt-10 " />
        {navLinksLeft.map((item, index) => {
          const isActive = pathName === item.href;
          return (
            <Link
              key={index}
              className={`block lg:inline-block hover:text-blue-600 ${
                isActive ? "text-blue-600" : ""
              }`}
              href={item.href}
            >
              {item.name}
            </Link>
          );
        })}
        <Image src={searchIcon} className="w-5" alt="search icon" />
      </main>

      <div className="lg:mr-0 mr-40 flex ">
        <svg
          className="cursor-pointer lg:hidden"
          onClick={() => setShow(!show)}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <div
          className={`${
            show ? "lg:hidden" : "hidden"
          } lg:w-1/4 bg-gray-200 py-6 px-4 z-10`}
        >
          {navLinks.map((item, index) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={index}
                className={`block py-2 px-4 hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-bold" : "text-gray-800"
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
