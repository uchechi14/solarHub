"use client";
import React, { useState } from "react";
// import Header from "./ui/Header";
import WorkingSteps from "./ui/WorkingSteps";
import Image from "next/image";
import vector from "../../public/images/Vector.svg";
import background from "../../public/images/Background.svg";
import Lodges from "./ui/Lodges";
import Calculator from "./ui/Calculator";
import Article from "./ui/Article";
import CLient from "./ui/CLient";
import Power from "./ui/Power";
// import Footer from "./ui/Footer";
import Hotels from "./Hotels";
import { FaArrowRight } from "react-icons/fa";
// import { rage } from "./utils/Font";

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
      <div className="w-full  flex justify-center bg-[url('/images/heroImage.svg')]  h-[88vh] max-h-1/5 bg-cover items-center">
        <div className="w-[90%] flex ">
          <div className="md:w-[70%] flex flex-col gap-5">
            <div className="w-[50%]">
              <p className="bg-white  opacity-25 text-[#101828] text-sm py-2.5 px-5 font-sora rounded-full">
                AT SOLARHUB
              </p>
            </div>
            <p className="font-sora text-4xl font-bold text-white">
              Power Your Future with Solar Investment
            </p>
            <p className="font-sora text-white">
              Transform your property into a sustainable powerhouse. Join our
              mission to create a greener future while earning attractive
              returns on your investment.
            </p>
            <div>
              <button className="bg-[#101828] text-white border-[1px] flex items-center gap-1 border-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
                Get Started <FaArrowRight />
              </button>
            </div>
          </div>
          <div className=" md:w-full"></div>
        </div>
      </div>
      <WorkingSteps />
      <div className="w-full flex justify-center py-10 md:bg-[#FAFAFA] bg-white">
        <div className="w-[90%] flex flex-col gap-4">
          <div className="flex md:justify-between flex-col md:flex-row  gap-2">
            <p className="text-4xl text-[#101828] w-full text-center md:text-left">
              Our Services
            </p>
            <p className="text-[#676767] w-full md:w-[70%] text-center md:text-left">
              We are the First Privately owned Solar installation company in
              Nigeria. We have all resources required to complete any size of
              project anywhere in Nigeria
            </p>
          </div>

          <div className="">
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-5 mt-3">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-10 ">
                  <p
                    className={`cursor-pointer text-lg ${
                      activeTab === "FullSolar"
                        ? "text-[#101828] pb-1 border-b border-[#101828]"
                        : "text-[#5F6C82]"
                    }`}
                    onClick={() => handleTab("FullSolar")}
                  >
                    Fullsolar installation
                  </p>
                  <p
                    className={`cursor-pointer text-lg ${
                      activeTab === "Consulte"
                        ? "text-[#101828] pb-1 border-b border-[#101828]"
                        : "text-[#5F6C82]"
                    }`}
                    onClick={() => handleTab("Consulte")}
                  >
                    Consultations
                  </p>
                </div>
                {/* <div className="border border-[#DEE1E6]"></div> */}
                {getShowArchived() ? (
                  <>
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
                    <div className="flex justify-center md:justify-normal">
                      <button className="bg-[#101828] flex items-center gap-1 text-white py-3 shadow px-[1.5rem] text-sm rounded-sm ">
                        GET STARTED <FaArrowRight />
                      </button>
                    </div>
                  </>
                ) : (
                  <div>THis is it</div>
                )}
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
