import React from "react";
import Collection1 from "/public/assets/Untitled (500 x 400 px) (1).svg";
import Image from "next/image";

const Partnership = () => {
  return (
    <div className="lg:p-[100px] p-[40px] py-[93.38px] text-center lg:max-w-[1440px] mx-auto">
      {/* Heading */}
      <h2 className="font-aeonik text-[24px] lg:text-[32px] text-white">
        Partner with us
      </h2>

      {/* Description */}
      <p className="text-[#BFBFBF] text-[18px] px-[20px] lg:px-0 font-spaceGrotesk mt-[20px]">
        Luxela is a decentralized marketplace that connects local brands and
        independent designers to a global audience. Luxela offers fast, cheap,
        and seamless transactions and ensures customers get original products
        from brands and not counterfeits.
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
