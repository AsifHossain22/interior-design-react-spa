import React from "react";
import { servicesBgImage, servicePackages } from "../assets/data";

const Services = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* BGLayer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${servicesBgImage})`,
        }}
      />

      {/* GlassContainer */}
      <div className="absolute inset-0 z-10 bg-prime-green/85 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left */}
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <div className="flex justify-between items-center text-amber-50 pb-4">
            <h2 className="uppercase rubik-font font-semibold text-2xl md:text-3xl mb-8 mt-4 lg:mt-14">
              Our Services [4]
            </h2>

            <a href="#" className="mb-2 cursor-pointer lg:hidden">
              Read More
            </a>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-8">
            <h2 className="text-amber-50 text-2xl md:text-3xl font-light rubik-font leading-tight max-w-md">
              We offer four design packages tailored to your needs, goals, and
              projct stage - from space planning to full interior realization.
            </h2>

            <button className="w-fit px-8 py-4 bg-amber-50 text-prime-green capitalize text-sm md:text-base lg:text-lg tracking-widest font-semibold rounded-sm hover:bg-white transition-all transform hover:translate-y-1">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5 md:gap-8 lg:mt-30  lg:h-[550px] overflow-y-scroll">
          {servicePackages.map((pkg, index) => (
            <div
              key={index}
              className="group p-8 cursor-pointer lg:p-10 border border-amber-50/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-amber-50 rubik-font text-xl lg:text-2xl font-light">
                  {pkg.title}
                </h3>
                <span className="text-amber-50/80 italic text-xl text-nowrap">
                  {pkg.price}
                </span>
              </div>

              {/* List */}
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-amber-50/40 uppercase text-xs tracking-tighter">
                  Includes:
                </p>

                <ul className="flex flex-col gap-1">
                  {pkg.includes.map((item, i) => (
                    <li
                      key={i}
                      className="text-amber-50/70 text-sm font-light flex items-start gap-2"
                    >
                      {/* BulletPoint */}
                      <span className="mt-1 5 w-1 h-1 amber-50/30 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="px-6 py-2 border border-amber-50/20 text-amber-50 uppercase text-sm tracking-widest rounded-full hover:bg-amber-50 hover:text-prime-green transition-all cursor-pointer">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
