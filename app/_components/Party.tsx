import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import React, { useState } from "react";
import Collection1 from "/public/assets/IMG-20241007-WA0029.jpg";
import Collection2 from "/public/assets/IMG-20241007-WA0030.jpg";
import Collection3 from "/public/assets/IMG-20241007-WA0033.jpg";
import Collection4 from "/public/assets/IMG-20241007-WA0032.jpg";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

const collections = [
  { id: 1, title: "University parties", image: Collection1 },
  { id: 2, title: "House parties", image: Collection2 },
  { id: 3, title: "Clubs parties", image: Collection3 },
  { id: 4, title: "International concerts & tour", image: Collection4 },
];

const Party = () => {
  const [step, setStep] = useState(1); // To manage steps in the dialog

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);
  return (
    <div className="mt-[80px] lg:mt-[100px] px-[16px] lg:px-[40px]">
      <div className="flex items-center justify-between">
        <h2 className="font-spaceGrotesk lg:text-[20px] font-medium">
          Party Events
        </h2>
        <div>
          {/* Button for booking, triggers the modal */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="font-spaceGrotesk font-medium px-[10px] h-10 bg-gradient-to-b from-primary to-primary/60 rounded-[10px] text-sm text-white shadow-lg focus:outline-none">
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

              {/* Step 1: User fills in details */}
              {step === 1 ? (
                <div className="space-y-4">
                  {/* Location Field */}
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

                  {/* Type of Event Field */}
                  <div>
                    <label className="block text-sm mb-2">Type of Event</label>
                    <select className="w-full p-2 rounded bg-[#333] text-white">
                      <option value="University parties">
                        University parties
                      </option>
                      <option value="House parties">House parties</option>
                      <option value="Club parties">Club parties</option>
                      <option value="International concerts">
                        International concerts
                      </option>
                    </select>
                  </div>

                  {/* Gmail Field */}
                  <div>
                    <label className="block text-sm mb-2">Gmail</label>
                    <input
                      type="email"
                      placeholder="Enter your Gmail"
                      className="w-full p-2 rounded bg-[#333] text-white"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full p-2 rounded bg-[#333] text-white"
                    />
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextStep}
                    className="w-full rounded-[8px] h-10 bg-gradient-to-b from-primary to-primary/60"
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Step 2: Payment Section */}
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

                  {/* Go Back Button */}
                  <button
                    onClick={handlePreviousStep}
                    className="w-full rounded-[8px] h-10 bg-gradient-to-b from-primary to-primary/60"
                  >
                    Go Back
                  </button>

                  {/* Pay Now Button */}
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
      <div className="lg:mt-[28px] mt-[32px] grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-[16px]">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="lg:w-[320px] lg:h-[401px] h-[200px] w-[172.5px] rounded-[4px] p-[12px] bg-[#1A1A1A]"
          >
            <div>
              <Image
                src={collection.image}
                alt={collection.title}
                className="lg:w-[296px] lg:h-[336.7px]"
              />
            </div>
            <div className="lg:mt-[20px] mt-[12px] flex justify-between items-center">
              <h2 className="font-spaceGrotesk text-[14px] lg:text-[16px] font-medium">
                {collection.title}
              </h2>
              <ArrowRightIcon className="w-[20px] h-[20px] flex" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Party;
