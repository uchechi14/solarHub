import React from "react";
import chair from "../../public/images/solar-panels-meadow 2.webp";
import chair2 from "../../public/images/solar-panels-meadow 2 (1).webp";
// import chair3 from "../../public/images/solar-panels-meadow 2 (1) (1).webp";
import Image from "next/image";

const Hotels = () => {
  const ImageItem = [
    {
      image: chair,
      name: "Lodges & Hotels",
      description:
        "Solar installation are becoming popular for lodges and hotels offering a sustainable and cost effective way for power.",
    },
    {
      image: chair2,
      name: "Estates & Mini estates",
      description:
        "Properties with solar installations tends to have higher market values, making them more attractive to potential buyers.",
    },
    {
      image: chair2,
      name: "Urban & Rural areas",
      description:
        "Solar installations offer distinct advantages in both urban and rural settings, addressing unique energy opportunities.",
    },
  ];
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%]">
        <div className="flex md:justify-between flex-col md:flex-row gap-3 py-9">
          <p className="text-4xl text-[#101828] font-soraBold w-full text-center md:text-left">
            Who are we for?
          </p>
          <p className="text-[#676767] w-full md:w-[70%] text-center md:text-left">
            A leading solar renewable energy company-that aims to power various
            categories of building such as: Hotels, lodges, mini estates,
            industries. e.t.c
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full">
          {ImageItem.map((items, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 items-center md:items-start"
            >
              <div className="w-full">
                <Image
                  src={items.image}
                  alt="chair"
                  className="w-full transition-transform duration-600 hover:scale-95 ease-in-out"
                />
              </div>
              <p className="font-sora text-[#101828] font-semibold">
                {items.name}
              </p>
              <p className="font-sora text-[#101828] text-sm text-center md:text-left">
                {items.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
