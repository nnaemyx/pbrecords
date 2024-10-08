"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import HamburgerIcon from "@/components/icons/Hamburger";
import CancelIcon from "@/components/icons/CancelIcon";
import LinkArrowIcon from "@/components/icons/LinkArrow";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <div className="lg:hidden block  px-[20px]">
        <div className="flex justify-between items-center">
          <div className="">
            <Image
              src="/assets/pb png.png"
              alt="logo"
              width={132}
              height={22}
            />
          </div>
          <div onClick={toggleMenu}>
            {isOpen ? <CancelIcon /> : <HamburgerIcon />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-[100px] inset-0 overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pb-[60px] bg-[#0E0E0E] border-none z-50 px-[20px]">
          <nav className="mt-[40px] px-[20px]">
            <ul className="font-spaceGrotesk text-white text-[18px]">
              <Link href="#news">
                <li className="flex  justify-between items-center">
                  <span>News/Trends</span>
                  <LinkArrowIcon />
                </li>
              </Link>
              <Link href="#party">
                <li className="flex mt-[33px] justify-between items-center">
                  <span>Party Events</span>
                  <LinkArrowIcon />
                </li>
              </Link>
              <Link href="#ushering">
                <li className="flex mt-[33px] justify-between items-center">
                  <span>Ushering Service</span>
                  <LinkArrowIcon />
                </li>
              </Link>

              <Link href="#music">
                <li className="flex mt-[33px] justify-between items-center">
                  <span>Music Promotion</span>
                  <LinkArrowIcon />
                </li>
              </Link>
              <Link href="#partnership">
                <li className="flex mt-[33px] justify-between items-center">
                  <span>Partnership</span>
                  <LinkArrowIcon />
                </li>
              </Link>
              <Link href="#about">
                <li className="flex mt-[33px] justify-between items-center">
                  <span>About us</span>
                  <LinkArrowIcon />
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex gap-[24px] items-center justify-center mt-[40px]">
            <h2 className="font-spaceGrotesk text-white text-[18px]">
              Chat us on Whatsapp
            </h2>
            <div className="bg-[#141414] border border-solid border-[#212121] rounded-[6px] p-[5px]">
              <Image
                src="/assets/whatsapp icon.png"
                alt="whatsapp icon"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
