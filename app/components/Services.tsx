import React from "react";
import workers from "../../public/images/inst2.jpg.webp";
import workers1 from "../../public/images/inst1.jpg.webp";
import Image from "next/image";
import WorkingSteps from "../components/ui/WorkingSteps";
import Hotels from "../components/Hotels";
import Lodges from "../components/ui/Lodges";
import Calculator from "../components/ui/Calculator";
import Power from "../components/ui/Power";

const Services = () => {
  return (
    <div>
      <div className="w-full flex justify-center py-10 md:bg-[#FAFAFA] bg-white">
        <div className="w-[90%] flex flex-col gap-4">
          <div className="flex md:justify-between flex-col md:flex-row ">
            <p className="text-4xl text-[#101828] w-full text-center md:text-left">
              Our Services
            </p>
            <p className="text-[#676767] w-full md:w-[70%] text-center md:text-left">
              We are the First Privately owned Solar installation company in
              Nigeria. We have all resources required to complete any size of
              project anywhere in Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-10 ">
            <div className="border border-[#CFD6DD] flex flex-col gap-2 pb-5 rounded-2xl  transition-transform duration-600 hover:scale-95 ease-in-out">
              <div className="w-full ">
                <Image
                  src={workers}
                  alt="workers"
                  className="w-full rounded-t-2xl"
                />
              </div>
              <div className="px-4 flex flex-col gap-2.5">
                <p className="text-[#101828] text-xl font-bold font-sora">
                  Installation Services
                </p>
                <p className="text-[#676767]">
                  Our skilled and knowledgeable engineers provide comprehensive
                  solar installation services throughout Nigeria.
                </p>
                <button className="bg-[#F0F3F5] w-full font-bold font-sora text-[#272E35] py-4 px-[1.5rem] text-sm rounded-sm ">
                  Learn more
                </button>
              </div>
            </div>
            <div className="border border-[#CFD6DD] flex flex-col gap-2 pb-5 rounded-2xl  transition-transform duration-600 hover:scale-95 ease-in-out">
              <div className="w-full ">
                <Image
                  src={workers1}
                  alt="workers"
                  className="w-full rounded-t-2xl"
                />
              </div>
              <div className="px-4 flex flex-col gap-2.5">
                <p className="text-[#101828] text-xl font-bold font-sora">
                  Installation Services
                </p>
                <p className="text-[#676767]">
                  Our skilled and knowledgeable engineers provide comprehensive
                  solar installation services throughout Nigeria.
                </p>
                <button className="bg-[#F0F3F5] w-full font-bold font-sora text-[#272E35] py-4 px-[1.5rem] text-sm rounded-sm ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkingSteps />
      <Hotels />
      <Lodges />
      <Calculator />
      <Power />
    </div>
  );
};

export default Services;
