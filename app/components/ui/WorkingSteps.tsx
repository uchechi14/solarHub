import React from "react";

const WorkingSteps = () => {
  return (
    <div className="">
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold font-soraBold text-[#101828]">
              250+
            </p>
            <p className="font-sora text-[#101828] text-sm">
              Completed Projects
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold font-soraBold text-[#101828]">
              500+
            </p>
            <p className="font-sora text-[#101828] text-sm">Installed Panels</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold font-soraBold text-[#101828]">
              1000+
            </p>
            <p className="font-sora text-[#101828] text-sm">Solar Setup</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold font-soraBold text-[#101828]">
              100+
            </p>
            <p className="font-sora text-[#101828] text-sm">Monitoring Solar</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-xl">Our Working Steps</p>
          <p className="">4 basic step to completing an installation with us</p>
        </div>
        <div className="w-[90%] grid md:grid-cols-2 gap-6 grid-cols-1">
          <div className="bg-[#F9FAFB] rounded-2xl flex flex-col gap-1.5 items-center py-8">
            <div className="size-[35px] shadow bg-[#FBBC05] rounded-sm"></div>
            <p className="font-bold ">Initial Consultation</p>
            <p className="text-center w-[80%]">
              Discussing your current energy consumption, and assessing your
              property&apos;s suitability for solar panel installation.
            </p>
          </div>
          <div className="bg-[#F9FAFB] rounded-2xl flex flex-col gap-1.5 items-center py-8">
            <div className="size-[35px] shadow bg-[#FBBC05] rounded-sm"></div>
            <p className="font-bold ">System Design</p>
            <p className="text-center w-[80%]">
              Analyzing the data during the initial consultation, your energy
              consumption, property orientation
            </p>
          </div>
          <div className="bg-[#F9FAFB] rounded-2xl flex flex-col gap-1.5 items-center py-8">
            <div className="size-[35px] shadow bg-[#FBBC05] rounded-sm"></div>
            <p className="font-bold ">Install & Active</p>
            <p className="text-center w-[80%]">
              our expert installation team will bring your clean energy vision
              to life
            </p>
          </div>
          <div className="bg-[#F9FAFB] rounded-2xl flex flex-col gap-1.5 items-center py-8">
            <div className="size-[35px] shadow bg-[#FBBC05] rounded-sm"></div>
            <p className="font-bold ">System Monitoring</p>
            <p className="text-center w-[80%]">
              Utilize monitoring to track your energy production, identifying
              any potential issues immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
