import React from "react";
import { stats } from "../assets/data";

const About = () => {
  return (
    <section className="py-10 md:pt-14 pb-18 bg-amber-50/80 text-prime-green">
      <div className="px-5 md:px-10 lg:px-16 2xl:px-40 grid lg:grid-cols-2 items-start">
        {/* Heading */}
        <h2 className="uppercase rubik-font font-semibold text-2xl md:text-3xl mb-8 mt-4 lg:mt-14">
          SINCE 2022
        </h2>

        {/* Text */}
        <div className="flex flex-col gap-8 lg:mt-10">
          {/* AboutParagraph */}
          <p className="text-2xl lg:text-3xl font-medium tracking-tighter mt-5">
            Nice to meet you — we're Ulanya and Denyz, a family duo and the
            co-founders of PRYDUMANO. We're both trained architects who found
            our true calling in interior design. <br className="md:hidden" />
            At PRYDUMANO, we believe design is a form of care — for your habits,
            your dreams, and your everyday life, We don't just create beautiful
            spaces; we design interiors that feel alive reflect who you are, and
            support you daily.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 my-14">
            {/* GridItems */}
            {stats.map(({ id, stat, desc }) => (
              <div key={id} className="flex flex-col gap-2 items-start">
                {/* Number */}
                <p className="text-4xl lg:text-5xl font-medium text-nowrap tracking-tighter">
                  {stat}
                </p>
                {/* Description */}
                <p className="tracking-tight lg:text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
