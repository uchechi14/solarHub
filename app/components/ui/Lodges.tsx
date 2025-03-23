import React from "react";
import Image from "next/image";
import image1 from "../../../public/images/image1.svg";
import image2 from "../../../public/images/image2.svg";
import image3 from "../../../public/images/image3.svg";

const Lodges = () => {
  const LodgesImage = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image3 },
    { image: image3 },
    { image: image3 },
    { image: image3 },
  ];

  return (
    <div className="w-full bg-[#101828] flex justify-center py-14">
      <div className="w-[90%]">
        <div className="text-white flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-white text-5xl font-rage ">Solar Hub</h1>
          <p>Functional Projects</p>
          <p className="text-4xl md:w-[40%]">
            Latest Project We Recently Completed
          </p>
          <p className="text-sm md:w-[35%]">
            Here are some of our past projects for satisfied customers, ranging
            from solar panel installations to complete solar system setups.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex gap-3 text-white pb-1.5 border-b border-b-[#DEE1E6]">
            <p>Lodges</p>
            <p>Mini Estate</p>
            <p>Industries</p>
            <p>Hostels</p>
          </div>
          <div className="bg-[#E9ECEF] py-5 px-3 rounded-t-xl">
            <div className="grid grid-cols-1 md:grid-cols-7 ">
              {LodgesImage.map((item, index) => (
                <div key={index} className="aspect-square w-full px-2 md:px-0">
                  <Image
                    src={item.image}
                    alt="image"
                    className="aspect-square w-full"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 ">
              {LodgesImage.map((item, index) => (
                <div key={index} className="w-full aspect-square px-2 md:px-0">
                  <Image
                    src={item.image}
                    alt="image"
                    className="aspect-square w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-white flex flex-col gap-2 md:items-start items-center">
              <p className="text-2xl">Express Lodge</p>
              <p className=" opacity-90 text-sm md:text-left text-center w-[70%]">
                We recently completed a full package installation for express
                lodge
              </p>
              <p>Learn more</p>
            </div>
            <div className="text-white flex flex-col gap-2 md:items-start items-center">
              <p className="text-2xl">Exclusive Lodge </p>
              <p className=" opacity-90 text-sm md:text-left text-center w-[70%]">
                We recently completed a full package installation for exclusive
                lodge
              </p>
              <p>Learn more</p>
            </div>
            <div className="text-white flex flex-col gap-2 md:items-start items-center">
              <p className="text-2xl">Premium Lodge</p>
              <p className=" opacity-90 text-sm md:text-left text-center w-[70%]">
                We recently completed a full package installation for premium
                lodge
              </p>
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lodges;
