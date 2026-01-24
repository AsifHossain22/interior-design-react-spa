import React from "react";
import { ArrowUpRight, BadgeDollarSign, ChevronUp } from "lucide-react";

const Footer = () => {
  // Logic to handle smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative min-h-[60vh] flex flex-col justify-between overflow-hidden text-amber-50">
      {/* 1. Glassy Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-prime-green/90 backdrop-blur-2xl" />

      {/* 2. Content Top Section */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Logo & Intro */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <BadgeDollarSign className="size-8 " />
          {/* Text */}
          <p className="text-sm lg:text-base opacity-60 leading-relaxed w-[200px] lg:w-[250px] ">
            Thoughtful interiors for bold souls. Based in Lviv, working across
            Ukraine and beyond.
          </p>
        </div>

        {/* Newsletter & Back to Top */}
        <div className="flex flex-col gap-6 md:pl-10">
          <p className="uppercase text-[10px] tracking-[0.3em] font-medium opacity-40">
            Our Newsletter
          </p>
          <div className="relative border-b border-amber-50/20 pb-2 flex items-center group">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-amber-50/30"
            />
            <ArrowUpRight className="size-4 opacity-40 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>

          {/* Back to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 w-fit group text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-all mt-4"
          >
            Back to Top{" "}
            <ChevronUp className="size-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Website Links */}
        <div className="flex flex-col gap-4 md:pl-20">
          <p className="uppercase text-[10px] tracking-[0.3em] font-medium opacity-40">
            Website
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li className="hover:opacity-60 transition-opacity cursor-pointer">
              Projects
            </li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">
              About Us
            </li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">
              Contacts
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <p className="uppercase text-[10px] tracking-[0.3em] font-medium opacity-40">
            Social Media
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li className="hover:opacity-60 transition-opacity cursor-pointer">
              Instagram
            </li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">
              Facebook
            </li>
            <li className="hover:opacity-60 transition-opacity cursor-pointer">
              LinkedIn
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Massive Display Text */}
      <div className="relative z-20 w-full overflow-hidden px-4 md:px-0 mt-auto">
        <h1 className="text-[15vw] font-bold leading-none tracking-tighter text-center uppercase opacity-90 translate-y-4 md:translate-y-6 select-none mt-8 mb-12 text-nowrap">
          Prydumano{" "}
          <sup className="text-lg lg:text-3xl font-normal -ml-3 lg:-ml-6 hidden md:inline">
            ®
          </sup>
        </h1>
      </div>

      {/* 4. Legal Bottom Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-8">
        <hr className="border-amber-50/10 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-xs uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} PRYDUMANO Interior Studio</p>
          <p className="hidden lg:block">All Rights Reserved</p>
          <p className="cursor-pointer hidden md:block hover:opacity-100 transition-opacity">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
