import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b-[#2B2B2B] border-b border-solid  px-[40px] mx-auto hidden lg:block">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/assets/pb png.png" alt="logo" width={150} height={43} />
        </div>
        <div className="flex items-center gap-[24px]">
          <ul className="font-spaceGrotesk text-[14px] text-white flex gap-[24px]">
            <Link href="#news">
              <li>News/Trends</li>
            </Link>
            <Link href="#party">
              <li>Party Events</li>
            </Link>
            <Link href="#ushering">
              <li>Ushering Service</li>
            </Link>
            <Link href="#music">
              <li>Music & Brand Promotion</li>
            </Link>
            <Link href="#partnership">
              <li>Partnership</li>
            </Link>
            <Link href="#about">
              <li>About us</li>
            </Link>
          </ul>
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
    </div>
  );
};

export default Navbar;
