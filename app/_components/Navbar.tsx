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
            <Link href="/Explore">
              <li>News/Trends</li>
            </Link>
            <li>Studio Section</li>
            <li>Party Events</li>
            <li>Ushering Service</li>
            <li>Music & Brand Promotion</li>
            <li>Partnership</li>
            <li>Support</li>
            <li>About us</li>
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
