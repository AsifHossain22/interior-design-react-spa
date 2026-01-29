import React, { useCallback, useEffect, useState } from "react";
import { items } from "../assets/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const [isPaused, setIsPaused] = useState(false);

  const getIndex = (offset) =>
    currentIndex + offset + (items.length % items.length);

  //   Handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, []);

  //   AutoPlayTimerLogic
  useEffect(() => {
    if (isPaused) return; // StopTimerIfUserIsHovering

    const timer = setInterval(() => {
      handleNext();
    }, 5000); // 5 SecondsPerSlide
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <section
      className="relative py-24 min-h-[700px] flex items-center justify-center overflow-hidden bg-zinc-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* GlassyBGLayer */}
      {items.map((item, index) => (
        <div
          key={`bg-${item.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out scale-100 ${index === currentIndex ? "opacity-30" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(80px)",
          }}
        ></div>
      ))}

      {/* SectionContent */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* PreviousButton */}
        <button
          onClick={handlePrev}
          className="group absolute cursor-pointer left-4 lg:left-10 top-1/2 -translate-y-1/2 flex items-center gap-4 z-30 text-amber-100 hover:text-white transition-colors"
        >
          <div className="hidden sm:block h-[1px] w-8 lg:w-16 bg-current opacity-30 group-hover:opacity-100 transition-all" />
          <span className="uppercase text-sm lg:text-lg tracking-[0.4em] font-medium hidden md:block">
            {items[getIndex(-1)]?.title}
          </span>
          <ChevronLeft className="md:hidden size-8" />
        </button>

        {/* Images */}
        <div className="flex items-center justify-center gap-6 lg:gap-12 w-full ">
          {/* LeftImage */}
          <div className="hidden md:block w-1/4 h-[350px] lg:h-[400px] relative cursor-pointer overflow-hidden grayscale opacity-20 border border-white/5 transition-opacity hover:opacity-40">
            {items.map((item, index) => (
              <img
                key={`prev-${item.id}`}
                src={item.img}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === getIndex(-1) ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* CenterImage */}
          <div className="relative w-[90%] saturate-130 md:w-1/3 h-[450px] lg:h-[550px] shadow-2xl border border-white/10 overflow-hidden">
            {items.map((item, index) => (
              <img
                key={`main-${item.id}`}
                src={item.img}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
              />
            ))}

            {/* ProgressBar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/50 z-30 w-full overflow-hidden">
              <div
                className={`h-full bg-white transition-all ${isPaused ? "w-0 " : "animate-progress"}`}
              ></div>
            </div>
          </div>

          {/* RightImage */}
          <div className="hidden md:block w-1/4 h-[350px] lg:h-[400px] relative cursor-pointer overflow-hidden grayscale opacity-20 border border-white/5 transition-opacity hover:opacity-40">
            {items.map((item, index) => (
              <img
                key={`next-${item.id}`}
                src={item.img}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === getIndex(1) ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>

        {/* NextButton */}
        <button
          onClick={handleNext}
          className="group absolute cursor-pointer right-4 lg:right-10 top-1/2 -translate-y-1/2 flex items-center gap-4 z-30 text-amber-100 hover:text-white transition-colors"
        >
          <span className="uppercase text-sm lg:text-lg tracking-[0.4em] font-medium hidden md:block">
            {items[getIndex(1)]?.title}
          </span>
          <ChevronRight className="md:hidden size-8" />

          <div className="hidden sm:block h-[1px] w-8 lg:w-16 bg-current opacity-30 group-hover:opacity-100 transition-all" />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
