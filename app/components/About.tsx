import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import solarPanel from "../../public/images/solar-panel-vector-iconn-2048x1982.png.svg";
import map from "../../public/images/BlankMap-Nigeria2.92.png.svg";
import vector from "../../public/images/Vector.svg";
import Team1 from "../../public/images/Team1.png";

const About = () => {
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="w-[85%] flex flex-col md:flex-row gap-4">
          <div className="w-full relative flex flex-col gap-5 items-center md:items-start">
            <p className="font-soraBold text-4xl text-center md:text-left">
              SolarHub is a well-known provider of solar renewable energy based
              in Nigeria.
            </p>
            <p className="font-soraThin text-center md:text-left">
              Our vision is to be the leading force in Nigeria&apos;s transition
              to renewable energy, pioneering advancements in solar technology,
              and setting the standard for excellence in the various industries,
              Also in both rural and urban areas
            </p>
            <div>
              <button className="bg-[#101828] text-white border-[1px] flex items-center gap-1 border-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
                See our latest project <FaArrowRight />
              </button>
            </div>
            <div className="absolute top-54 left-[-40px]">
              <Image
                src={solarPanel}
                alt="solar panel"
                className="size-[200px]"
              />
            </div>
          </div>
          <div className="w-full aspect-4/3">
            <Image src={map} alt="map" className="object-contain " />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10 bg-[#FAFAFA] ">
        <div className="w-[90%] flex flex-col md:flex-row gap-10">
          <div className=" text-[#101828] w-full">
            <div className="flex gap-3 items-center">
              <Image
                src={vector}
                alt="vector"
                className="size-[15px]   flex-shrink-0"
              />
              <p className="font-sora text-xl">Our Vision</p>
            </div>
            <p className="font-sora text-sm md:w-[80%]">
              To be the leading force in Nigeria&apos;s transition to renewable
              energy, pioneering advancements in solar technology, and setting
              the standard for excellence in the various industries.
            </p>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className=" text-[#101828]">
              <div className="flex gap-3 items-center">
                <Image
                  src={vector}
                  alt="vector"
                  className="size-[15px]   flex-shrink-0"
                />
                <p className="font-sora text-xl">Our Mission</p>
              </div>
              <p className="font-sora text-sm md:w-[80%]">
                We are on a mission to provide solar energy to the society to
                various industries, including both rural and urban areas.
              </p>
            </div>
            <div className=" text-[#101828]">
              <div className="flex gap-3 items-center">
                <Image
                  src={vector}
                  alt="vector"
                  className="size-[15px]   flex-shrink-0"
                />
                <p className="font-sora text-xl">Our Values</p>
              </div>
              <p className="font-sora text-sm">
                Innovation, Collaboration, Excellence (ICE).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%]">
          <div className="flex justify-between flex-col md:flex-row gap-5">
            <p className="text-3xl font-sora text-#101828">
              Meet Our Core Team!
            </p>
            <p className="text-[#0D141F] font-sora">
              With more than 200 members worldwide, we are a growing team.
            </p>
          </div>
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 justify-center">
            <div className="flex flex-col gap-2">
              <Image src={Team1} alt="Team1" className="h-[320px]" />
              <p className="text-[#000000] font-sora text-xl">
                Feranmi Micheal
              </p>
              <p className="text-[#000000] font-sora text-sm">CEO & Founder</p>
            </div>
            <div className="flex flex-col gap-2">
              <Image src={Team1} alt="Team1" className="h-[320px]" />
              <p className="text-[#000000] font-sora text-xl">David James</p>
              <p className="text-[#000000] font-sora text-sm">CTO </p>
            </div>
            <div className="flex flex-col gap-2">
              <Image src={Team1} alt="Team1" className="h-[320px]" />
              <p className="text-[#000000] font-sora text-xl">Segun Arinze</p>
              <p className="text-[#000000] font-sora text-sm">COO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
