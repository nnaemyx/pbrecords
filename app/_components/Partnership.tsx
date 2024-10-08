import React from "react";
import Collection1 from "/public/assets/partnership.jpg";
import Image from "next/image";

const Partnership = () => {
  return (
    <div className="lg:p-[100px] p-[40px] py-[93.38px] text-center lg:max-w-[1440px] mx-auto">
      {/* Heading */}
      <h2 className="font-aeonik text-[24px] lg:text-[32px] text-white">
        Partner with us
      </h2>

      <p className="text-[#BFBFBF] text-[18px]  lg:px-0 font-spaceGrotesk mt-[20px]">
        We collaborate with: - Recording labels - Event planners - Music
        promoters - Social media influencers - Party organizers
      </p>

      {/* Description */}
      <p className="text-[#BFBFBF] text-[18px] lg:px-0 font-spaceGrotesk mt-[20px]">
        To become the go-to platform for entertainment enthusiasts, providing
        unparalleled services, promoting emerging talent, and creating a vibrant
        community. Join the Movement: Sign up now to explore our services, stay
        updated on upcoming events, and connect with like-minded individuals.
        Contact Information: Email: infopbrecordent.ltd@gmail.com Phone:
        +2349042020299
      </p>

      {/* Full-width Image */}
      <div className="lg:mt-[68px] mt-[72px]">
        <div className="relative w-full h-[300px] lg:h-[500px]">
          <Image
            src={Collection1}
            alt="partnership image"
            fill
            className="object-cover rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
