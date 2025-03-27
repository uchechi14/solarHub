import React from "react";
import Image from "next/image";
import Man from "../../../public/images/artivce1.webp";
import Man1 from "../../../public/images/artivce2.webp";
import Man2 from "../../../public/images/artivce3.webp";
import { PiStarFourFill } from "react-icons/pi";

const Article = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#101828] flex items-center gap-1.5 bg-[#1018281A] px-9 py-2 rounded-full">
            <PiStarFourFill /> Update
          </p>
          <p className="font-bold font-sora text-2xl text-[#101828]">
            Latest articles & innovations
          </p>
          <p className="text-[#475467]">
            Stay updated on policies, cost-saving solutions, and success stories
            shaping a
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="flex flex-col gap-2.5">
            <div className="w-full">
              <Image src={Man} alt="Man" className="w-full" />
            </div>
            <p className="font-bold text-[#101828] font-sora text-lg">
              Power Without Limits: 5 Off-Grid Energy Solutions That Just Work
            </p>
            <p className="text-[#ADADAD] font-sora text-xs">
              February 8, 2025 /// No Comments
            </p>
            <p className="text-[#475467] text-xs font-sora">
              Living in Nigeria means dealing with unpredictable power. One
              minute, you’re watching your favorite show, and the next…
              darkness. The solution? Going off-grid.......
            </p>
            <p className="text-[#101828]">Read More »</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-full">
              <Image src={Man1} alt="Man" className="w-full" />
            </div>
            <p className="font-bold text-[#101828] font-sora text-lg">
              Which Solar Generator Fits Your Life? Let’s 1250 vs 1260 – And a
              Special February Deal!
            </p>
            <p className="text-[#ADADAD] font-sora text-xs">
              February 3, 2025 /// No Comments
            </p>
            <p className="text-[#475467] text-xs font-sora">
              I hit my breaking point with KEDCO about two months ago. You know
              how it is… constant blackouts, appliances acting up, and that
              annoying “generator
            </p>
            <p className="text-[#101828]">Read More »</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-full">
              <Image src={Man2} alt="Man" className="w-full" />
            </div>
            <p className="font-bold text-[#101828] font-sora text-lg">
              Power Dilemma: Should You Get an Inverter or a Solar Generator?
              Let’s Break It Down!{" "}
            </p>
            <p className="text-[#ADADAD] font-sora text-xs">
              February 1, 2025 /// No Comments
            </p>
            <p className="text-[#475467] text-xs font-sora">
              Let’s be real… having a stable power source in Nigeria is no
              longer a luxury, it’s a survival tactic. NEPA will humble you. One
              moment,
            </p>
            <p className="text-[#101828]">Read More »</p>
          </div>
        </div>
        <div className="flex justify-center gap-2  ">
          <div className="size-[35px] flex justify-center items-center border border-[#EBEBEB]">
            1
          </div>
          <div className="size-[35px] flex justify-center items-center border border-[#EBEBEB]">
            2
          </div>
          <div className="size-[35px] flex justify-center items-center border border-[#EBEBEB]">
            3
          </div>
          <div className="size-[35px] flex justify-center items-center border border-[#EBEBEB]">
            ...
          </div>
          <div className="size-[35px] flex justify-center items-center border border-[#EBEBEB]">
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
