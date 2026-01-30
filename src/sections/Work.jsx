import React from "react";
import { projects } from "../assets/data";

const Work = () => {
  return (
    <section className="py-20 bg-amber-50 text-prime-green">
      <div className="max-w-7xl-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 mb-16">
          <h2 className="uppercase rubik-font font-semibold text-2xl md:text-3xl mb-8 mt-4 lg:mt-14">
            Our Projects [32]
          </h2>

          <a href="#" className="mb-2 cursor-pointer">
            See All
          </a>
        </div>

        {/* ProjectsList */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* TextContent - 4 ColSpanOnDesktop */}
              <div className="md:col-span-4 flex flex-col gap-6 lg:sticky lg:top-80 ">
                <h2 className="text-5xl rubik-font lg:text-7xl tracking-tight">
                  {project.title}
                </h2>

                <p className="text-sm lg:text-base leading-relaxed opacity-80 max-w-[280px]">
                  {project.description}
                </p>

                <div className="mt-8 text-[11px] lg:text-sm tracking-wide leading-relaxed opacity-50 uppercase">
                  <p>{project.location}</p>
                  <p>{project.size}</p>
                </div>
              </div>

              {/* ImagesContent - 8 ColSpanOnDesktop */}
              <div className="md:col-span-8 grid md:grid-cols-2 gap-6 lg:gap-12">
                {/* Smaller, Staggerd Image */}
                <div className="mt-0 lg:mt-24 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={project.img1}
                    alt={`${project.title} detail`}
                    className="w-full h-full cursor-pointer object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* LargerPrimaryImage */}
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={project.img2}
                    alt={`${project.title} main`}
                    className="w-full h-full cursor-pointer object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
