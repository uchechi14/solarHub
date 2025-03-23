"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { name: " HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: " SERVICES", path: "/servicess" },
    { name: " OUR NEWS", path: "/contact" },
  ];

  // const [sideOpen, setSideOpen] = useState<boolean>(false);

  // const menuOpen = () => {
  //   setSideOpen(!sideOpen);
  // };

  // const [start_anime, setstart_anime] = useState(false);
  // useEffect(() => {
  //   setstart_anime(true);
  // }, []);

  // const handle_close = () => {
  //   setstart_anime(false);
  //   setTimeout(() => {
  //     setSideOpen(false);
  //   }, 400);
  // };

  return (
    <div className="w-full bg-white h-20  flex items-center justify-center ">
      <div className="w-[90%] flex justify-between items-center">
        <h1 className="text-[#101828] text-4xl font-rage ">Solar Hub</h1>
        {/* <ul className="md:flex gap-[2.5rem] hidden">
          <li className="font-semibold text-[#101828] font-sora text-sm ">
            HOME
          </li>
          <li className="font-semibold text-[#101828] font-sora text-sm">
            ABOUT US
          </li>
          <li className="font-semibold text-[#101828] font-sora  text-sm">
            SERVICES
          </li>
          <li className="font-semibold text-[#101828] font-sora  text-sm">
            OUR NEWS
          </li>
        </ul> */}
        <nav className="md:flex gap-[2.5rem] hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`font-semibold text-[#10182899] font-sora  text-sm ${
                  isActive ? "text-[#101828]" : "text-[#10182899]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="md:flex hidden items-center gap-3">
          <button className="text-[#101828] font-sora  text-sm">
            CONTACT US
          </button>
          <button className="bg-[#101828] text-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
            GET STARTED
          </button>
        </div>
        <div className="md:hidden flex  text-3xl">
          <GiHamburgerMenu />
        </div>
      </div>
      {/* {sideOpen && (
        <div
          onClick={handle_close}
          style={{
            transition: "0.4s linear",
          }}
          className={`  ${
            start_anime ? "bg-opacity-70" : "bg-opacity-0"
          } fixed top-0 left-0 h-[100vh] bg-red-300 w-full z-[10] lg:hidden`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              transition: "0.4s linear",
            }}
            className={`fixed top-0 w-[80%] h-full left-0 bg-white  shadow-lg ease-in-out z-50 ${
              start_anime ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mt-6 ml-[10px] ">
              <nav className="md:hidden gap-[2.5rem] flex">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`font-semibold text-[#10182899] font-sora  text-sm ${
                        isActive ? "text-[#101828]" : "text-[#10182899]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex md:hidden items-center gap-3">
                <button className="text-[#101828] font-sora  text-sm">
                  CONTACT US
                </button>
                <button className="bg-[#101828] text-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      )} */}
    </div>
  );
};

export default Header;
