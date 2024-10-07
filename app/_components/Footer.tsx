import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="lg:p-[60px] py-[80px] px-[20px]  bg-[#1A1A1A]">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[330px]">
          <Image src="/assets/pb png.png" alt="logo" width={150} height={43} />
          <p className="mt-[60.36px] font-spaceGrotesk text-[#BFBFBF]">
            Connecting independent music artists to a global audience with
            transparency, sustainability, and a commitment to authentic music
            practices
          </p>
          <div className="mt-[40px]">
            <div className="flex items-center gap-[4px]">
              <p className="text-[#BFBFBF] font-spaceGrotesk">pbrecords.com</p>
              <ArrowRightIcon />
            </div>
            <hr className="w-[136px]" />
          </div>
        </div>

        <div>
          <h2 className="text-[14px] mt-[80px] lg:mt-0 font-spaceGrotesk text-white">
            Subscribe to our newsletter
          </h2>
          <form className="relative bg-[#2B2B2B] rounded-[8px] lg:w-[580px] py-[17px] mt-[10px] ">
            <input
              type="text"
              placeholder="Your email address"
              className="focus:outline-none bg-[#2B2B2B] text-white placeholder:font-spaceGrotesk placeholder:text-[#ACACAC] px-[16px] "
            />
            <button
              type="submit"
              className="absolute right-2 bottom-2.5 font-spaceGrotesk font-medium w-[106px] h-[36px] bg-gradient-to-b from-primary to-primary/60 rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-[80px] mt-[80px] lg:mt-[60px]">
            <div className="lg:flex lg:gap-[80px]">
              <div>
                <h2 className="font-aeonik text-[18px] text-white">
                  PBRECORDS
                </h2>
                <div className="text-[#BFBFBF] mt-[24px] space-y-[16px] font-spaceGrotesk">
                  <p>About Us</p>
                  <p>Party Events</p>
                  <p>Music Promotion</p>
                  <p>Ushering Services</p>
                  <p>News</p>
                </div>
              </div>
              <div className="mt-[80px] lg:mt-0">
                <h2 className="font-aeonik text-[18px] text-white">LEGAL</h2>
                <div className="text-[#BFBFBF] mt-[24px] space-y-[16px] font-spaceGrotesk">
                  <p>Privacy Policy</p>
                  <p>Terms of Agreement</p>
                  <p>Refunds</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-aeonik text-[18px] text-white">CONTACT US</h2>
              <div className="text-[#BFBFBF] mt-[24px] space-y-[16px] font-spaceGrotesk">
                <p>WHATSAPP</p>
                <p>Partner with PBRECORDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
