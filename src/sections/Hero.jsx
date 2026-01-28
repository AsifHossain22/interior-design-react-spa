import React, { useEffect, useState } from "react";
import { heroImages } from "../assets/data";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   30 Second Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 pt-30 md:pt-40 h-screen text-amber-50 relative overflow-hidden ">
      {/* BGInmageLayer */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out bg-cover saturate-130 bg-center ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* DarkOverlay */}
            <div className="absolute inset-0 bg-zinc-950/50"></div>
          </div>
        ))}
      </div>

      {/* ContentLayer */}
      <div className="px-5 py-4 relative z-10 ">
        {/* Heading */}
        <h1 className="text-6xl md:text-[120px] lg:text-[210px] 2xl:text-[280px] relative font-bold tracking-tighter text-center lg:ml-2">
          Dynamic {/* SubText - 1 */}
          <span className="text-sm md:text-base lg:text-xl font-normal absolute -bottom-5 lg:-bottom-6 left-0 md:left-5 2xl:left-22 tracking-normal">
            Interior Design Studio <sup className="text-xs">®️</sup>
          </span>
          {/* SubText - 2 */}
          <span className="text-sm md:text-base lg:text-xl font-normal absolute -bottom-80 lg:-bottom-12 -right-25 lg:right-108 text-right lg:text-left -rotate-90 lg:rotate-0 tracking-wider">
            Living Spaces for <br className="hidden lg:block" />
            Bold Souls
          </span>
        </h1>

        {/* BarCodeDcor */}
        <div className="w-20 h-12 md:h-20 md:w-30 lg:w-40 lg:h-24 bg-zinc-50 p-1 absolute -bottom-170 lg:-bottom-110 lg:left-20 lg:rounded">
          <div className="size-full bg-zinc-100 relative">
            <span className="absolute -bottom-6 md:-bottom-8 lg:-bottom-9 text-center -left-2.5 md:left-0 lg:left-2 text-xs md:text-sm lg:text-base tracking-tight lg:tracking-normal text-nowrap">
              Scan the QR Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
