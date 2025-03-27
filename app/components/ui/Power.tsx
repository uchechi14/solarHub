import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Power = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] flex flex-col items-center gap-3 ">
        <p className=" font-soraBold text-[#101828] text-4xl md:text-5xl text-center">
          Get unique power
        </p>
        <p className="text-[#101828] text-xl text-center md:w-[30%]">
          We’re your number one solution to solar power need!
        </p>
        <div className="flex gap-3">
          <button className="bg-[#101828] flex items-center gap-1.5 text-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
            GET STARTED <FaArrowRight />
          </button>
          <button className="text-[#101828] border border-[#101828] bg-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Power;
