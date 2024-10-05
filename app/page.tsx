"use client";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee"; // Importing the Marquee component
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import MobileFashion from "/public/assets/studio1.jpg";
import Fashion from "/public/assets/studio2.jpg";

const images = [
  { src: "/assets/studio1.jpg", alt: "Music 1" },
  { src: "/assets/studio2.jpg", alt: "Music 2" },
  { src: "/assets/studio3.jpg", alt: "Music 3" },
  { src: "/assets/studio4.jpg", alt: "Music 4" },
  { src: "/assets/studio1.jpg", alt: "Music 5" },
];

interface Slide {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const brands = [1, 2];

  const slides: Slide[] = [
    {
      id: 1,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
    {
      id: 2,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
    {
      id: 3,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
    {
      id: 4,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (slidesRef.current) {
      slidesRef.current.scrollTo({
        left: index * slidesRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (slidesRef.current) {
      const scrollLeft = slidesRef.current.scrollLeft;
      const slideWidth = slidesRef.current.offsetWidth;
      const newCurrentSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newCurrentSlide);
    }
  };

  useEffect(() => {
    const slidesContainer = slidesRef.current;
    if (slidesContainer) {
      slidesContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slidesContainer) {
        slidesContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="lg:mt-[72px] mt-[44px] flex flex-col justify-center">
        <div className="mx-auto text-center mt-[24px] text-white">
          {/* Hero Text */}
          <div className="lg:text-[48px] text-[30px] font-medium leading-[140%] lg:leading-[120%] tracking-[6%]">
            <h1>
              Promoting <span className="text-primary">Music</span>,
            </h1>
            <h1>Authentic Sounds, Unfiltered Music</h1>
          </div>

          {/* Hero Description for Desktop */}
          <div className="hidden lg:block mt-[16px] text-[16px] font-spaceGrotesk">
            <p>
              Connecting independent music artists to a global audience with
              transparency, sustainability, and a
            </p>
            <p>commitment to authentic music practices</p>
          </div>

          {/* Hero Description for Mobile */}
          <div className="text-[15px] leading-[150%] px-[20px] lg:hidden block font-spaceGrotesk mt-[12px]">
            <p>
              Connecting independent music artists to a global audience with
              transparency, sustainability, and a commitment to authentic
              music practices
            </p>
          </div>

          {/* Book Us Button */}
          <div className="lg:max-w-[230px] px-[20px] w-full mt-[32px] lg:mt-[20px] mx-auto">
            <button
              className="font-spaceGrotesk font-medium w-full h-10 bg-gradient-to-b from-primary to-primary/60 rounded-[10px] text-sm text-white shadow-lg focus:outline-none"
              onClick={() => alert("Booking form or modal opens")}
            >
              Book us now
            </button>
          </div>
        </div>
      </div>

      {/* Image Marquee Section */}
      <div className="relative overflow-hidden h-[400px] pt-[60px]">
        {/* Using react-fast-marquee */}
        <Marquee pauseOnHover={true} speed={80} gradient={false}>
          {/* Map through the images array */}
          {images.map((image, index) => (
            <div key={index} className="mx-[1px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-[40px] lg:mt-[60px] pl-[16px] lg:pl-[40px]">
        <h2 className="font-spaceGrotesk text-secondary font-medium text-[16px] lg:text-[20px]">
          News/Trends
        </h2>
      </div>

      <div className="mt-[24px] lg:flex hidden overflow-x-scroll scrollbar-hide gap-[40px] pl-[40px]">
        {brands.map((_, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-[28px] border border-solid border-[#2B2B2B] rounded-[20px] h-[520px] flex-shrink-0 min-w-[1100px]"
          >
            <div className="flex items-center justify-between gap-[40px]">
              {/* Text Section */}
              <div className="max-w-[502px] mt-[104px] flex flex-col justify-center  w-full">
                <div className="text-secondary">
                  <h2 className="font-aeonik text-[28px]">
                    Limited Fashion Pieces
                  </h2>
                  <p className="mt-[24px] text-[20px] font-spaceGrotesk">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>

                <div className="mt-[92px]">
                  <button className="font-spaceGrotesk flex items-center pl-4 gap-[12px] font-medium w-[154px] h-[48px] bg-gradient-to-b from-primary to-primary/60 text-[16px] rounded-[8px] text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-none">
                    Read more
                    <span className="flex items-center justify-center bg-black rounded-[6px] w-[28px] h-[28px]">
                      <ArrowRightIcon />
                    </span>
                  </button>
                </div>
              </div>

              <Image src={Fashion} alt="Featured brand images" className="w-[502px] h-[464px] rounded-[12px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="px-[16px] lg:hidden block mt-[24px]">
        <div
          ref={slidesRef}
          className="overflow-x-scroll snap-x scrollbar-hide flex space-x-4"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-[20px] min-w-[100%] snap-center rounded-[12px] border border-solid border-[#2B2B2B]"
            >
              <Image src={slide.image} alt="image" className="w-full rounded-[8px]" />
              <div className="mt-[80.87px] space-y-[20px] text-secondary font-spaceGrotesk">
                <h2 className="text-[20px] font-medium">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="mt-[29px]">
                <button className="font-spaceGrotesk font-medium w-full h-[44px] bg-gradient-to-b from-primary to-primary/60 rounded-[12px] text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
                  View more
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-[24px]">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-[40px] h-[8px] rounded-full cursor-pointer ${
                currentSlide === index ? "bg-primary" : "bg-[#2B2B2B]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
