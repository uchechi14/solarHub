"use client";
import WorkingSteps from "./ui/WorkingSteps";
import Image from "next/image";
import vector from "../../public/images/Vector.webp";
import background from "../../public/images/ServicesBackground.webp";
import Lodges from "./ui/Lodges";
import Calculator from "./ui/Calculator";
import Article from "./ui/Article";
import CLient from "./ui/CLient";
import Power from "./ui/Power";
import Hotels from "./Hotels";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../public/images/heroImage.webp";
import { PiStarFourFill } from "react-icons/pi";
import { useState } from "react";
import TextAnimation from "./ui/TextAnimation";
import SlideInTextAnimation from "./ui/SlideInTextAnimation";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState<string>("FullSolar");

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  const getShowArchived = () => {
    switch (activeTab) {
      case "FullSolar":
        return true;
      case "Consulte":
        return false;
      default:
        return false;
    }
  };

  return (
    <div>
      <div className="w-full relative ">
        <div className="relative h-[88vh]">
          <div className="absolute  inset-0  z-0">
            <Image
              src={heroImage}
              alt="heroImage"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex w-full justify-center items-center py-20 ">
            <div className="w-[90%] flex items-center">
              <div className=" flex flex-col gap-5 w-full">
                <div className="">
                  <p className="bg-white w-[220px] flex items-center gap-3 opacity-25 text-[#101828] text-sm py-2.5 px-5 font-sora rounded-full">
                    <PiStarFourFill /> AT SOLARHUB
                  </p>
                </div>
                <p className="font-soraBold text-4xl font-bold text-white">
                  <SlideInTextAnimation text=" Power Your Future with Solar Investment" />
                </p>
                <p className="font-sora text-white">
                  Transform your property into a sustainable powerhouse. Join
                  our mission to create a greener future while earning
                  attractive returns on your investment.
                </p>
                <div>
                  <button className="bg-[#101828] text-white border-[1px] flex items-center gap-1 border-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
                    Get Started <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className="md:w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <WorkingSteps />
      <div className="w-full flex justify-center py-10 md:bg-[#FAFAFA] bg-white">
        <div className="w-[90%] flex flex-col gap-4">
          <TextAnimation>
            <div className="flex md:justify-between flex-col md:flex-row w-full gap-2">
              <p className="text-4xl text-[#101828] font-sora w-full text-center md:text-left">
                Our Services
              </p>
              <p className="text-[#676767] w-full md:w-[70%] text-center md:text-left">
                We are the First Privately owned Solar installation company in
                Nigeria. We have all resources required to complete any size of
                project anywhere in Nigeria
              </p>
            </div>
          </TextAnimation>

          <div className="">
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-5 mt-3">
              <div className="flex flex-col gap-7 w-full">
                <div className="flex gap-10 ">
                  <p
                    className={`cursor-pointer text-lg transition-all duration-600 ease-in-out ${
                      activeTab === "FullSolar"
                        ? "text-[#101828] pb-1 border-b border-[#101828]"
                        : "text-[#5F6C82] hover:text-[#101828]"
                    }`}
                    onClick={() => handleTab("FullSolar")}
                  >
                    Fullsolar installation
                  </p>
                  <p
                    className={`cursor-pointer text-lg transition-all duration-300 ease-in-out ${
                      activeTab === "Consulte"
                        ? "text-[#101828] pb-1 border-b border-[#101828]"
                        : "text-[#5F6C82] hover:text-[#101828]"
                    }`}
                    onClick={() => handleTab("Consulte")}
                  >
                    Consultations
                  </p>
                </div>
                {/* <div className="border border-[#DEE1E6]"></div> */}

                <div
                  className={`
          transition-all duration-500 ease-in-out 
          transform 
          ${
            getShowArchived()
              ? "opacity-100 translate-y-0"
              : "opacity-100 -translate-y-4"
          }
        `}
                >
                  {getShowArchived() ? (
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 md:w-[80%] ">
                        <div className="size-[15px] mt-1 flex-shrink-0">
                          <Image
                            src={vector}
                            alt="vector"
                            className="size-full  flex-shrink-0"
                          />
                        </div>
                        <p className="text-[#101828]">
                          Initial assessment and consultation: Our professional
                          installer will assess your property, including roof
                          condition, orientation and shading
                        </p>
                      </div>
                      <div className="flex gap-2 md:w-[80%] ">
                        <div className="size-[15px] mt-1 flex-shrink-0">
                          <Image
                            src={vector}
                            alt="vector"
                            className="size-full  flex-shrink-0"
                          />
                        </div>
                        <p className="text-[#101828]">
                          Initial assessment and consultation: Our professional
                          installer will assess your property, including roof
                          condition, orientation and shading
                        </p>
                      </div>
                      <div className="flex gap-2 md:w-[80%] ">
                        <div className="size-[15px] mt-1 flex-shrink-0">
                          <Image
                            src={vector}
                            alt="vector"
                            className="size-full  flex-shrink-0"
                          />
                        </div>
                        <p className="text-[#101828]">
                          Initial assessment and consultation: Our professional
                          installer will assess your property, including roof
                          condition, orientation and shading
                        </p>
                      </div>
                      <div className="flex gap-2 md:w-[80%] ">
                        <div className="size-[15px] mt-1 flex-shrink-0">
                          <Image
                            src={vector}
                            alt="vector"
                            className="size-full  flex-shrink-0"
                          />
                        </div>
                        <p className="text-[#101828]">
                          Initial assessment and consultation: Our professional
                          installer will assess your property, including roof
                          condition, orientation and shading
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>THis is it</div>
                  )}
                  <div className="flex justify-center md:justify-normal mt-2">
                    <button className="bg-[#101828] flex items-center gap-1 text-white py-3 shadow px-[1.5rem] text-sm rounded-sm ">
                      GET STARTED <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <Image
                  src={background}
                  alt=""
                  className="object-cover w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hotels />
      <Lodges />
      <Calculator />
      <Article />
      <CLient />
      <Power />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
