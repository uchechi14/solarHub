"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import solarPanel from "../../public/images/solar-panel-vector-iconn-2048x1982.png.svg";
import map from "../../public/images/BlankMap-Nigeria2.92.png.webp";
import vector from "../../public/images/Vector.webp";
import Team1 from "../../public/images/gadus1.webp";
import Team2 from "../../public/images/gadus2.webp";
import Team3 from "../../public/images/gadus3.webp";
import woman from "../../public/images/happyblackwoman.webp";
import CLient from "./ui/CLient";
import SlideInTextAnimation from "./ui/SlideInTextAnimation";
// import Power from "./ui/Power";
import { RiArrowDropDownLine } from "react-icons/ri";
import TextAnimation from "./ui/TextAnimation";

const About = () => {
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="w-[85%] flex flex-col md:flex-row gap-4">
          <div className="w-full relative flex flex-col gap-5 items-center md:items-start">
            <p className="font-soraBold text-4xl text-center md:text-left">
              <SlideInTextAnimation text=" SolarHub is a well-known provider of solar renewable energy based in Nigeria." />
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
          <ResponsiveMapPoints />
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
          <div className="w-full flex flex-col md:gap-20 gap-10">
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
        <div className="w-[90%] flex flex-col gap-5">
          <TextAnimation>
            <div className="flex justify-between flex-col md:flex-row gap-5">
              <p className="text-3xl font-sora text-#101828 text-center md:text-left">
                Meet Our Core Team!
              </p>
              <p className="text-[#0D141F] font-sora text-center md:text-left">
                With more than 200 members worldwide, we are a growing team.
              </p>
            </div>
          </TextAnimation>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 justify-center">
            <div className="flex flex-col gap-1 items-center ">
              <Image
                src={Team1}
                alt="Team1"
                className="transition-transform duration-600 hover:scale-95 ease-in-out"
              />
              <p className="text-[#000000] font-sora text-xl ">
                Feranmi Micheal
              </p>
              <p className="text-[#000000] font-sora text-sm">CEO & Founder</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Image
                src={Team2}
                alt="Team1"
                className="transition-transform duration-600 hover:scale-95 ease-in-out"
              />
              <p className="text-[#000000] font-sora text-xl">David James</p>
              <p className="text-[#000000] font-sora text-sm">CTO </p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Image
                src={Team3}
                alt="Team1"
                className="transition-transform duration-600 hover:scale-95 ease-in-out"
              />
              <p className="text-[#000000] font-sora text-xl">Segun Arinze</p>
              <p className="text-[#000000] font-sora text-sm">COO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="w-[90%] flex justify-between items-center flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-3.5 items-center md:items-start">
            <p className="font-sora text-[#181D4E] text-xl text-center md:text-left">
              Get in Touch
            </p>
            <p className="font-sora text-4xl text-center md:text-left">
              <SlideInTextAnimation text="Speak with our solar experts" />
            </p>
            <div>
              <button className="bg-[#101828] text-white border-[1px] flex items-center gap-1 py-2.5 px-[1.5rem] text-sm rounded-sm ">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <Image src={woman} alt="blackwomansmiling" />
          </div>
        </div>
      </div>
      <CLient />
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
    </>
  );
};

const MOVEMENT_BOUNDS = {
  minX: 0,
  maxX: 100,
  minY: 0,
  maxY: 100,
};

// Define different dot types
const DOT_TYPES = {
  SLOW: "slow",
  MEDIUM: "medium",
  FAST: "fast",
  ERRATIC: "erratic",
};

const ResponsiveMapPoints = () => {
  // Generate 20 random locations with different movement patterns
  const generateLocations = () => {
    const locations = [];
    const movementTypes = [
      DOT_TYPES.SLOW,
      DOT_TYPES.MEDIUM,
      DOT_TYPES.FAST,
      DOT_TYPES.ERRATIC,
    ];

    for (let i = 1; i <= 30; i++) {
      const randomX = Math.random() * 80 + 10; // 10% to 90%
      const randomY = Math.random() * 80 + 10; // 10% to 90%
      const movementType =
        movementTypes[Math.floor(Math.random() * movementTypes.length)];

      // Determine speed and movement range based on type
      let speed, range;
      switch (movementType) {
        case DOT_TYPES.SLOW:
          speed = 5000 + Math.random() * 5000; // 5-7 seconds
          range = { x: 3, y: 3 };
          break;
        case DOT_TYPES.MEDIUM:
          speed = 3000 + Math.random() * 5000; // 3-4 seconds
          range = { x: 5, y: 5 };
          break;
        case DOT_TYPES.FAST:
          speed = 1500 + Math.random() * 500; // 1.5-2 seconds
          range = { x: 8, y: 8 };
          break;
        case DOT_TYPES.ERRATIC:
          speed = 2000 + Math.random() * 1000; // 2-3 seconds
          range = { x: 12, y: 12 };
          break;
      }

      type Position = { x: number; y: number };
      locations.push({
        id: i,
        x: `${randomX}%`,
        y: `${randomY}%`,
        color: "bg-green-500", // All dots are green
        movementType,
        speed,
        range,
        size: movementType === DOT_TYPES.FAST ? "w-2 h-2" : "w-3 h-3",
        // Give fast dots a trail effect
        hasTrail:
          movementType === DOT_TYPES.FAST || movementType === DOT_TYPES.ERRATIC,
        lastPositions: [] as Position[],
      });
    }

    return locations;
  };

  const [locations, setLocations] = useState(generateLocations);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  console.log(imageSize);

  // Update image size whenever it changes
  useEffect(() => {
    const updateImageSize = () => {
      if (imageRef.current) {
        setImageSize({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight,
        });
      }
    };

    // Initial size update
    updateImageSize();

    // Update on window resize
    window.addEventListener("resize", updateImageSize);

    // Update when image loads
    if (imageRef.current) {
      imageRef.current.onload = updateImageSize;
    }

    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  // Movement logic - each dot moves independently
  useEffect(() => {
    const moveIntervals = locations.map((location) => {
      const moveLocation = () => {
        setLocations((prevLocations) => {
          return prevLocations.map((loc) => {
            if (loc.id !== location.id) return loc;

            const currentX = parseFloat(loc.x);
            const currentY = parseFloat(loc.y);

            // Movement range varies by type
            const moveFactor =
              loc.movementType === DOT_TYPES.ERRATIC
                ? Math.random() > 0.7
                  ? 3
                  : 1
                : 1; // Erratic dots occasionally make bigger jumps

            const randomX =
              currentX +
              (Math.random() * (loc.range?.x ?? 5) * 2 - (loc.range?.x ?? 5)) *
                moveFactor;
            const randomY =
              currentY +
              (Math.random() * (loc.range?.y ?? 5) * 2 - (loc.range?.y ?? 5)) *
                moveFactor;

            const clampedX = Math.min(
              Math.max(randomX, MOVEMENT_BOUNDS.minX),
              MOVEMENT_BOUNDS.maxX
            );
            const clampedY = Math.min(
              Math.max(randomY, MOVEMENT_BOUNDS.minY),
              MOVEMENT_BOUNDS.maxY
            );

            // Store position history for trail effect
            let newLastPositions = loc.lastPositions || [];
            if (loc.hasTrail) {
              newLastPositions = [
                { x: currentX, y: currentY },
                ...newLastPositions.slice(0, 4),
              ];
            }

            return {
              ...loc,
              x: `${clampedX}%`,
              y: `${clampedY}%`,
              lastPositions: newLastPositions,
            };
          });
        });
      };

      return setInterval(moveLocation, location.speed);
    });

    return () => moveIntervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="w-full relative">
      <div className="w-full relative">
        <Image
          ref={imageRef}
          src={map}
          alt="map"
          className="object-cover w-full"
        />

        {/* Points Container */}
        <div className="absolute inset-0 pointer-events-none size-[70%] left-10  top-10">
          {locations.map((point) => (
            <React.Fragment key={point.id}>
              {/* Trailing effect for fast dots */}
              {point.hasTrail &&
                point.lastPositions &&
                point.lastPositions.map((pos, i) => (
                  <div
                    key={`trail-${point.id}-${i}`}
                    className={`absolute rounded-full ${point.color} opacity-${
                      30 - i * 6
                    }`}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      width: i === 0 ? "3px" : `${3 - i * 0.5}px`,
                      height: i === 0 ? "3px" : `${3 - i * 0.5}px`,
                    }}
                  ></div>
                ))}

              {/* Main dot */}
              <div
                key={point.id}
                className={`absolute rounded-full ${point.color} ${point.size}`}
                style={{
                  left: point.x,
                  top: point.y,
                  transition: `all ${
                    point.movementType === DOT_TYPES.ERRATIC ? "0.3s" : "0.5s"
                  } ${
                    point.movementType === DOT_TYPES.ERRATIC ? "linear" : "ease"
                  }`,
                }}
              ></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
