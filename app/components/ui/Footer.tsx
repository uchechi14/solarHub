import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/SolarHub.svg";
import twitter from "../../../public/images/twitter.svg";
import linkedIn from "../../../public/images/linkedIn.svg";
import facebook from "../../../public/images/facebook.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full flex justify-center py-10 border-t border-t-[#DADADA]">
      <div className="w-[90%] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-0">
        <div>
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="flex gap-3 mt-5">
            <Image src={twitter} alt="twitterIcon" />
            <Image src={linkedIn} alt="linekdinIcon" />
            <Image src={facebook} alt="facebookIcon" />
          </div>
        </div>
        <div>
          <p className="text-[#101828] font-sora">SERVICES</p>
          <p className="text-[#293958] font-sora cursor-pointer">
            Solar installation
          </p>
          <p className="text-[#293958] font-sora cursor-pointer">
            Consultation
          </p>
        </div>
        <div>
          <p className="text-[#101828] font-sora">COMPANY</p>
          <p className="text-[#293958] font-sora cursor-pointer">About Us</p>
          <p className="text-[#293958] font-sora cursor-pointer">Careers</p>
          <p className="text-[#293958] font-sora cursor-pointer">Contact</p>
        </div>
        <div>
          <p className="text-[#101828] font-sora">STAY UPDATED</p>
          <p className="text-[#293958] font-sora">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-2">
            <input
              className="px-5 border border-[#D0D5DD] text-xs outline-none rounded-sm text-[#667085] shadow py-2.5"
              placeholder="Enter your email"
            />
            <button className="bg-[#101828] text-white py-2.5 px-[1.5rem] text-sm rounded-sm shadow ">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-[#667085] mt-5">
          ©{currentYear} SolarHub LTD, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
