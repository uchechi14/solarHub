import React from "react";
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
  return (
    <div>
      {/* <Header /> */}
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
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-5 mt-3">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-3">
                  <p className="text-[#101828]">Fullsolar installation</p>
                  <p className="text-[#101828]">Consultations </p>
                </div>
                <div className="flex gap-2 md:w-[80%] ">
                  <div className="size-[20px]">
                    <Image src={vector} alt="vector" className="size-full" />
                  </div>
                  <p className="text-[#101828] ">
                    Initial assessment and consultation: Our professional
                    installer will assess your property, including roof
                    condition, orientation and shading
                  </p>
                </div>
                <div className="flex gap-2 md:w-[80%]">
                  <div className="size-[20px]">
                    <Image src={vector} alt="vector" className="size-full" />
                  </div>
                  <p className="text-[#101828] ">
                    System design: Based on assessment, our installer will
                    design a custom solar system that meets your needs, this
                    includes selecting the right number of solar panels
                  </p>
                </div>
                <div className="flex gap-2 md:w-[80%]">
                  <div className="size-[20px]">
                    <Image src={vector} alt="vector" className="size-full" />
                  </div>
                  <p className="text-[#101828] ">
                    Financial analysis: our installer will provide a detailed
                    cost estimate and explain available financing options,
                    incentives, and potential savings
                  </p>
                </div>
                <div className="flex gap-2 md:w-[80%]">
                  <div className="size-[20px]">
                    <Image src={vector} alt="vector" className="size-[15px]" />
                  </div>
                  <p className="text-[#101828] ">
                    Mounting system installation: our installer will securely
                    attach the mounting system to your roof or ground, solar
                    panels are carefully mounted onto the racking system.
                  </p>
                </div>
                <div className="flex gap-2 md:w-[80%]">
                  <div className="size-[20px]">
                    <Image src={vector} alt="vector" className="size-full" />
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
              </div>
              <div className="w-full ">
                <Image
                  src={background}
                  alt=""
                  className="object-cover w-full"
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
