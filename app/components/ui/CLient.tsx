import React from "react";
import Image from "next/image";
import girl from "../../../public/images/beautiful-happy-smiling-female-student-using-tablet-browse-internet-research-scroll-social-media-while-working-home-cheerful-young-joyful-girl-searching-web 4.svg";

const CLient = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] flex flex-col items-center gap-9">
        <div className="md:w-[50%] w-full">
          <p className="font-semibold text-[#101828] md:text-5xl text-3xl  text-center">
            Loved by‍ more than +100,000 clients.
          </p>
        </div>
        <div className=" relative w-full">
          <div className="w-full  bg-red-400  rounded-2xl">
            <Image
              src={girl}
              alt=""
              className="w-full bg-white h-fit rounded-2xl"
              //   bg-[url('/images/heroImage.svg')]
            />
          </div>
          <div className="absolute left-0 text-white pl-9 bottom-0 pb-5 w-[50%] flex flex-col gap-2">
            <p>
              “I am thrilled with the solar panel installation from SolarHub!
              From the initial consultation to the final setup, the team was
              highly professional and knowledgeable. Thank you for your
              exceptional service!”
            </p>
            <p className="text-xl">Dewan Miniquo</p>
            <p>Individual- Mr. John</p>
          </div>
        </div>
        <div className="flex gap-5">
          <p className="text-[#272E35] pt-2 px-4 border-t border-t-[#101828]">
            Individuals
          </p>
          <p className="text-[#272E35] pt-2 px-4 border-t border-t-[#101828]">
            Business Owners
          </p>
        </div>
      </div>
    </div>
  );
};

export default CLient;
