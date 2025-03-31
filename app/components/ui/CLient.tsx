import React from "react";
import Image from "next/image";
// import girl from "../../../public/images/beautiful-happy-smiling-female-student-using-tablet-browse-internet-research-scroll-social-media-while-working-home-cheerful-young-joyful-girl-searching-web 4.svg";
import SmilingGirl from "../../../public/images/finegirl.webp";
import TextAnimation from "./TextAnimation";

const CLient = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] flex flex-col items-center gap-9">
        <div className="md:w-[50%] w-full">
          <p className="font-semibold text-[#101828] md:text-5xl text-3xl  text-center">
            Loved by‍ more than +100,000 clients.
          </p>
        </div>
        <div className="relative w-full">
          <div className="relative">
            {/* Remove absolute positioning from the image container */}
            <div className="w-full rounded-2xl">
              <Image
                src={SmilingGirl}
                alt="girl"
                className="w-full object-cover rounded-2xl absolute inset-0 h-full"
              />
            </div>

            {/* Positioning text content */}
            <div className="relative z-10 pt-36 pb-8 px-4">
              {" "}
              {/* Add padding to ensure text has space */}
              <TextAnimation>
                <div className="text-white md:w-[50%] flex flex-col gap-2">
                  <p className="font-soraThin">
                    &quot;I am thrilled with the solar panel installation from
                    SolarHub! From the initial consultation to the final setup,
                    the team was highly professional and knowledgeable. Thank
                    you for your exceptional service!&quot;
                  </p>
                  <p className="text-3xl font-soraBold">Dewan Miniquo</p>
                  <p>Individual- Mr. John</p>
                </div>
              </TextAnimation>
            </div>
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
