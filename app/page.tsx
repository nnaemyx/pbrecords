"use client";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee"; // Importing the Marquee component
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import MobileFashion from "/public/assets/studio1.jpg";
import Fashion from "/public/assets/studio2.jpg";
import Party from "./_components/Party";
import Ushering from "./_components/Ushering";
import Music from "./_components/Music";
import Partnership from "./_components/Partnership";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import About from "./_components/About";
// import { Button } from "@/components/ui/button";

const images = [
  { src: "/assets/Untitled (500 x 400 px) (1).svg", alt: "Music 1" },
  { src: "/assets/Untitled (500 x 400 px) (2).svg", alt: "Music 2" },
  { src: "/assets/Untitled (500 x 400 px) (3).svg", alt: "Music 3" },
  { src: "/assets/Untitled (500 x 400 px) (4).svg", alt: "Music 4" },
  { src: "/assets/Untitled (500 x 400 px) (5).svg", alt: "Music 4" },
  { src: "/assets/Untitled (500 x 400 px) (6).svg", alt: "Music 4" },
  { src: "/assets/Untitled (500 x 400 px) (7).svg", alt: "Music 4" },
  { src: "/assets/Untitled (500 x 400 px).svg", alt: "Music 5" },
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
  const [step, setStep] = useState(1); // State to manage the booking steps

  const handleBookUs = () => {
    setStep(2); // Move to the payment step
  };
  const handleGoBack = () => {
    setStep(1); // Go back to the booking step
  };

  const slides: Slide[] = [
    {
      id: 1,
      title:
        "MNRK Music Group has promoted Chris Moncada to Chief Operating Officer (COO), effective immediately.",
      description:
        "In this elevated role, Moncada will oversee all day-to-day operations for MNRK, developing and executing key business strategies, and will drive strategic growth initiatives with a heavy focus on A&R, artist development, and catalog growth.",
      image: MobileFashion,
    },
    {
      id: 2,
      title: "‘Espresso’ hitmaker Julian Bunetta inks global publishing agreement with Sony Music Publishing",
      description:
        "Bunetta’s body of work that has exceeded 30 billion streams, and he has worked with stars from Sabrina Carpenter and Teddy Swims to Thomas Rhett, One Direction, Niall Horan, Rudimental, and many others.",
      image: MobileFashion,
    },
    {
      id: 3,
      title: "From Pink Floyd’s $400m deal to TikTok’s scrapped Merlin talks… it’s MBW’s Weekly Round-Up",
      description:
        "Last week, TikTok made headlines for shutting down its subscription music streaming service This week, the ByteDance-owned app made headlines for shutting down its re-licensing negotiations with indie rep Merlin.",
      image: MobileFashion,
    },
    {
      id: 4,
      title: "Coldplay launch exclusive TikTok ‘MOON MUSiC’ in-app experience",
      description:
        "TikTok says that the hub for the new album, released today (October 4), will “engage fans across the globe, offering a unique, fan-centric initiative where users can explore content from the band”.",
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
            <p>Your One-Stop-Shop for Studio Sessions, Event Ushering,</p>
            <p> Music Promotion, and Party Updates</p>
          </div>

          {/* Hero Description for Mobile */}
          <div className="text-[15px] leading-[150%] px-[20px] lg:hidden block font-spaceGrotesk mt-[12px]">
            <p>
              Your One-Stop-Shop for Studio Sessions, Event Ushering, Music
              Promotion, and Party Updates
            </p>
          </div>

          {/* Book Us Button with Dialog Trigger */}
          <div className="lg:max-w-[230px] px-[20px] w-full mt-[32px] lg:mt-[20px] mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <button className="font-spaceGrotesk font-medium w-full h-10 bg-gradient-to-b from-primary to-primary/60 rounded-[10px] text-sm text-white shadow-lg focus:outline-none">
                  Book us now
                </button>
              </DialogTrigger>

              {/* Dialog Content */}
              <DialogContent className="bg-[#1a1a1a] text-white rounded-lg p-6">
                <DialogHeader>
                  <DialogTitle>Book Us</DialogTitle>
                  <DialogDescription>
                    Fill in the details below to proceed with your booking.
                  </DialogDescription>
                </DialogHeader>

                {/* Conditional Rendering for Booking Step 1 or Step 2 */}
                {step === 1 ? (
                  <div className="space-y-4">
                    {/* Location Selection */}
                    <div>
                      <label className="block text-sm mb-2">Location</label>
                      <select className="w-full p-2 rounded bg-[#333] text-white">
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="South Africa">South Africa</option>
                        <option value="UK">United Kingdom</option>
                        <option value="UK">India</option>
                        <option value="UK">Algeria</option>
                        <option value="UK">Ethiopia</option>
                        <option value="UK">Argentina</option>
                        <option value="UK">United States</option>
                      </select>
                    </div>

                    {/* Genre Selection */}
                    <div>
                      <label className="block text-sm mb-2">Genre</label>
                      <select className="w-full p-2 rounded bg-[#333] text-white">
                        <option value="Afrobeats">Afrobeats</option>
                        <option value="Hip-Hop">Hip-Hop</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Pop">Pop</option>
                      </select>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm mb-2">Gmail</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 rounded bg-[#333] text-white"
                      />
                    </div>

                    {/* Book Us Button */}
                    <button
                      onClick={handleBookUs}
                      className="w-full rounded-[8px] h-10 bg-gradient-to-b from-primary to-primary/60"
                    >
                      Book us
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Payment Section (still in development) */}
                    <div className="text-center">
                      <p className="text-lg">
                        This feature is still in development!
                      </p>
                      <p>Select your currency for booking:</p>
                    </div>

                    {/* Currency Selection */}
                    <div>
                      <select className="w-full p-2 rounded bg-[#333] text-white">
                        <option value="USD">USD - US Dollar</option>
                        <option value="NGN">NGN - Nigerian Naira</option>
                        <option value="GBP">GBP - British Pound</option>
                      </select>
                    </div>
                    <button
                      onClick={handleGoBack}
                      className="w-full rounded-[8px] h-10 bg-gradient-to-b from-primary to-primary/60"
                    >
                      Go Back
                    </button>
                    <button
                      disabled
                      className="w-full rounded-[8px] h-10 bg-gradient-to-b from-primary to-primary/60"
                    >
                      Pay now
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Image Marquee Section */}
      <div className="relative overflow-hidden  pt-[60px]">
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
                className=""
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-[40px] lg:mt-[60px] px-[16px] lg:px-[40px]" id="about">
        <About />
      </div>

      <div className="mt-[40px] lg:mt-[60px] pl-[16px] lg:pl-[40px]" id="news">
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
                  <h2 className="font-aeonik text-[20px]">
                    MNRK Music Group has promoted Chris Moncada to Chief
                    Operating Officer (COO), effective immediately.
                  </h2>
                  <p className="mt-[24px] text-[20px] font-spaceGrotesk">
                    In this elevated role, Moncada will oversee all day-to-day
                    operations for MNRK, developing and executing key business
                    strategies, and will drive strategic growth initiatives with
                    a heavy focus on A&R, artist development, and catalog
                    growth.
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

              <Image
                src={Fashion}
                alt="Featured brand images"
                className="w-[502px] h-[464px] rounded-[12px]"
              />
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
              <Image
                src={slide.image}
                alt="image"
                className="w-full rounded-[8px]"
              />
              <div className="mt-[80.87px] space-y-[20px] text-secondary font-spaceGrotesk">
                <h2 className="text-[20px] font-medium">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="mt-[29px]">
                <button className="font-spaceGrotesk font-medium w-full h-[44px] bg-gradient-to-b from-primary to-primary/60 rounded-[12px] text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
                  Read more
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

      <div id="party">
        <Party />
      </div>

      <div id="ushering">
        <Ushering />
      </div>

      <div id="music">
        <Music />
      </div>

      <div id="partnership">
        <Partnership />
      </div>
    </>
  );
}
