"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { IoMenu } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { name: " HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutUs" },
    { name: " SERVICES", href: "/serve" },
    { name: " CONTACT US", href: "/contact" },
  ];

  const [sideOpen, setSideOpen] = useState<boolean>(false);
  const [start_anime, setstart_anime] = useState(false);

  const menuOpen = () => {
    setSideOpen(true);

    setTimeout(() => {
      setstart_anime(true);
    }, 10);
  };

  const handle_close = () => {
    setstart_anime(false);
    setTimeout(() => {
      setSideOpen(false);
    }, 400);
  };

  return (
    <div className="w-full bg-white h-20  flex items-center justify-center ">
      <div className="w-[90%] flex justify-between items-center">
        <h1 className="text-[#101828] text-4xl font-rage ">Solar Hub</h1>

        <nav className="lg:flex gap-[2.5rem] hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`${
                pathname === item.href ? "text-[#101828]" : "text-[#10182899]"
              }  font-semibold  font-sora  text-shadow text-shadow-2xl text-sm hover:text-[#101828] transition duration-600 ease-in-out `}
            >
              <Link href={item.href}>{item.name}</Link>
              <p
                className={`w-[50%] mt-2 ${
                  pathname === item.href ? "border-b-2 border-b-[#101828]" : ""
                } `}
              ></p>
            </div>
          ))}
        </nav>
        <div className="lg:flex hidden items-center gap-3">
          <button className="bg-[#101828] text-white py-2.5 px-[1.5rem] text-sm rounded-sm ">
            GET STARTED
          </button>
        </div>
        <div className="lg:hidden flex text-4xl" onClick={menuOpen}>
          <IoMenu />
        </div>
      </div>

      {sideOpen && (
        <div
          onClick={handle_close}
          style={{
            transition: "0.4s linear",
          }}
          className={`h-[100vh] left-0 fixed  top-0 w-full z-[1000] flex lg:hidden bg-[#06080e65] ${
            start_anime ? "bg-opacity-70" : "bg-opacity-0"
          }`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              transition: "0.4s linear",
            }}
            className={`h-full left-0 w-[70%] flex lg:hidden fixed top-0
                bg-white shadow-lg ease-in-out z-50  ${
                  start_anime ? "translate-x-0" : "-translate-x-full"
                }`}
          >
            <div className="px-7 pt-9 flex gap-5 flex-col">
              <nav className="lg:hidden gap-6 flex flex-col">
                {navItems.map((item, index) => (
                  <p
                    key={index}
                    className={`${
                      pathname === item.href
                        ? "text-[#101828]"
                        : "text-[#10182899]"
                    }  font-semibold  font-sora  text-shadow text-shadow-2xl text-sm hover:text-[#101828] transition duration-600 ease-in-out `}
                  >
                    <Link href={item.href}>{item.name}</Link>
                    <p
                      className={`w-[50%] mt-2 ${
                        pathname === item.href
                          ? "border-b-2 border-b-[#101828]"
                          : ""
                      } `}
                    ></p>
                  </p>
                ))}
              </nav>
              <div className="flex lg:hidden flex-col items-start md:items-center gap-5">
                <button className="bg-[#101828] text-white shadow-2xl py-2.5 px-[1.5rem] text-sm rounded-sm ">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Header;
