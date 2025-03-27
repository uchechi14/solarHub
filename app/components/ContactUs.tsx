import React from "react";
// import { BsBarChart } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineCancel, MdOutlineMail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import Power from "./ui/Power";
import { FiPhone } from "react-icons/fi";

type props = {
  step: number;
};
const ContactUs = ({ step }: props) => {
  const accountArray = [
    {
      text: "Get Started",
      step: 1,
    },
    {
      text: "Pick a date",
      step: 2,
    },
    {
      text: "Pick a time",
      step: 3,
    },
    {
      text: "Book now",
      step: 4,
    },
    {
      text: "Get calender invite",
      step: 5,
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%] flex flex-col gap-3 items-center">
          <p className="text-[#101828] text-4xl font-sora text-center  lg:w-[30%]">
            Let&apos;s talk about your solar power
          </p>
          <p className="text-[#101828] font-sora  text-center  lg:w-[30%]">
            Our personal solar advisor are here to answer your queries and
            questions
          </p>
          <div className="bg-[#FFFFFF] flex flex-col gap-3 rounded-2xl shadow-[0_10px_70px_rgba(0,0,0,0.25)]  px-8 py-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-sora text-[#101828]">First name</p>
                <input
                  type="text"
                  className="w-full px-2.5 py-2 rounded-sm border border-[#EEF5FF] outline-none"
                  placeholder="e.g Daniel"
                />
              </div>
              <div className="flex flex-col gap-2 w-full ">
                <p className="font-sora text-[#101828]">Last name</p>
                <input
                  type="text"
                  className="w-full px-2.5 py-2 rounded-sm border border-[#EEF5FF] outline-none"
                  placeholder="e.g Daniel"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-sora text-[#101828]">Email</p>
                <input
                  type="text"
                  className="w-full px-2.5 py-2 rounded-sm border border-[#EEF5FF] outline-none focus:border-opacity-70 border-opacity-30 transition duration-300 "
                  placeholder="e.g daniel@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-sora text-[#101828]">Phone number</p>
                <input
                  type="text"
                  className="w-full px-2.5 py-2 rounded-sm border border-[#EEF5FF] outline-none"
                  placeholder="e.g 0810423943"
                />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-2">
                <p className="font-sora text-[#101828]">How can we help you?</p>
                <textarea
                  className="w-full px-2.5 py-2 rounded-sm border border-[#EEF5FF] outline-none"
                  placeholder="Your message"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-sora text-[#101828] text-sm">
                I would like to receive information, news and events about
                solarhub
              </p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-sora text-[#101828] text-sm">
                By submitting this form I agree to solarhub privacy policy and
                non disclosure agreement.
              </p>
            </div>
            <button className="bg-[#101828] w-full flex justify-center items-center gap-1 text-white py-3 shadow  text-sm rounded-sm ">
              Send message
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10  bg-white">
        <div className="w-[90%] grid md:grid-cols-3 gap-5 grid-cols-1">
          <div className="bg-[#F9FAFB] shadow-md rounded-2xl flex justify-center items-center px-8 py-10 transition-transform duration-600 hover:scale-95 ease-in-out">
            <div className="flex gap-2.5 ">
              <div className="size-[35px] shadow flex-shrink-0 bg-[#FBBC05] rounded-sm flex justify-center items-center text-white text-xl">
                <SlLocationPin />
              </div>
              <div>
                <p className="font-bold text-[#101828] font-sora">Address</p>
                <p className="font-sora">
                  No. 89 Chikakore Estate, Kubwa Abuja.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F9FAFB] shadow-md rounded-2xl flex justify-center items-center px-8 py-10 transition-transform duration-600 hover:scale-95 ease-in-out">
            <div className="flex gap-2.5 ">
              <div className="size-[35px] shadow bg-[#FBBC05] flex-shrink-0 rounded-sm flex justify-center items-center text-white text-xl">
                <MdOutlineMail />
              </div>
              <div>
                <p className="font-bold text-[#101828] font-sora">Email</p>
                <p className="font-sora">
                  info@solarhub.com contact@solarhub.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F9FAFB] shadow-md rounded-2xl flex justify-center  items-center px-8 py-10 transition-transform duration-600 hover:scale-95 ease-in-out">
            <div className="flex gap-2.5  ">
              <div className="size-[35px] shadow bg-[#FBBC05] flex-shrink-0 rounded-sm flex justify-center items-center text-white text-xl">
                <FiPhone />
              </div>
              <div>
                <p className="font-bold text-[#101828] font-sora">Phone</p>
                <p className="font-sora">Enquiries: 08082428134</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%]">
          <div>
            <p className="text-[#101828] text-2xl font-soraBold">
              Book a free demo
            </p>
            <p className="text-[#101828] font-sora text-sm">
              Experience firsthand how Solarhub works– secure your spot today!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <div className="flex w-full flex-col ">
              {accountArray.map((item, index) => (
                <div key={index} className="flex w-full  gap-3  items-center ">
                  <div className="flex  items-center  ">
                    {index != accountArray.length && (
                      <div
                        style={{ transition: "0.4s linear" }}
                        className={` ${
                          step != index + 1
                            ? "border-[#101828]"
                            : " border-[#EDEEF3]"
                        } border-1  md:w-auto flex w-full  h-[4rem] flex-shrink-0`}
                      ></div>
                    )}
                  </div>
                  <p
                    className={` text-center  ${
                      step != index + 1
                        ? "text-[#101828] text-xl"
                        : "text-[#586283]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className=" border border-[#E9ECEF] rounded-xl flex flex-col gap-2 py-8  px-6 md:w-[80%]">
              <div className="text-[#101828] text-xl flex justify-end">
                <MdOutlineCancel />
              </div>
              <div className="bg-[#101828] text-white font-sora text-xs py-7  flex justify-end px-3.5 rounded-sm">
                <p className="md:w-[30%] w-[50%]">
                  Onboard over 100,000 users with unlimited access control.
                </p>
              </div>
              <p className="font-sora text-[#101828]">
                Speak with SolarHub help desk
              </p>
              <p className="text-[#101828] font-bold text-xl">
                Schedule your free demo
              </p>
              <div className="text-[#3A424A]">
                <p>Schedule a demo with a dedicated onboarding specialist.</p>
                <p>
                  In a 30 minute call, they will give you a product tour and
                  help make your setup as easy as possible
                </p>
              </div>
              <button className="bg-[#101828] text-white  py-3 px-[1.5rem] text-sm rounded-sm ">
                Pick a time
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#FAFAFA] py-10">
        <div className="w-[90%] flex flex-col items-center gap-5">
          <p className="text-3xl text-[#101828]">Frequently Asked Questions</p>
          <div className="md:w-[60%] w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[#101828] font-sora font-semibold text-xl">
                General
              </p>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                What trust SolarHub ?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                What category of business is this?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                How does SolarHub works?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
            </div>
          </div>
          <div className="md:w-[60%] w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[#101828] font-sora font-semibold text-xl">
                Solar Benefits
              </p>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                How does going solar saves money?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                How will solar impact my property value?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                How does SolarHub works?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
            </div>
          </div>
          <div className="md:w-[60%] w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[#101828] font-sora font-semibold text-xl">
                How it works
              </p>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                Do my solar panel works when the sun isn’t shinning?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                Can I go off-grid with solar panels?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                Do solar panels works in blackout?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
              <button className="w-full px-2.5 flex justify-between text-[#262556] items-center rounded-sm py-3 bg-white shadow-sm border border-[#13276D0F]">
                How much does sola maintenance cost?{" "}
                <RiArrowDropDownLine className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Power />
    </>
  );
};

export default ContactUs;
