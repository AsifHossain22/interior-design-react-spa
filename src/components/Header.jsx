import { AnimatePresence, delay, motion } from "framer-motion";
import { BadgeDollarSign, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { href } from "react-router-dom";

const Header = () => {
  // ScrollState
  const [isScrolled, setIsScrolled] = useState(false);

  //   MobileMenuState
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   NavLinks
  const navLinkks = [
    { name: "About Us", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 text-amber-50 z-999 transition-all duration-500 py-5 ${isScrolled ? "bg-zinc-800/80 backdrop-blur-md " : "bg-transparent"}`}
      >
        <div className="px-4 lg:px-8 2xl:px-40 flex items-center justify-between">
          {/* Logo */}
          <BadgeDollarSign className="size-8 " />

          {/* DesktopNavbar */}
          <div className="lg:flex items-center gap-8 lg:gap-12 hidden">
            {navLinkks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:-translate-y-1 hover:underline underline-offset-8 cursor-pointer transition-all duration-300 2xl:text-lg ease-in text-amber-50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* DesktopContact */}
          <button className="p-2 px-6 cursor-pointer rounded-sm hidden lg:flex font-semibold bg-amber-100 text-green-900 hover:bg-white transition-colors">
            Contact Us
          </button>

          {/* MobileMenuButton */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
            <Menu className="size-10" />
          </button>
        </div>
      </header>

      {/* MobileNavbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-zinc-900 text-amber-50 flex flex-col p-8 md:p-12 "
          >
            {/* NavbarHeader */}
            <div className="flex justify-between items-center mb-20">
              <BadgeDollarSign className="size-8 opacity-40 " />
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X className="size-10 " />
              </button>
            </div>

            {/* NavLinks */}
            <nav className="flex flex-col gap-8">
              {navLinkks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsMenuOpen(false)}
                  key={link.name}
                  href={link.href}
                  className="text-6xl md:text-8xl font-bold tracking-tighter hover:italic transition-all duration-300 w-fit"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-2xl italic text-left text-amber-100/60"
              >
                Start a Project -&gt;
              </motion.button>
            </nav>

            {/* NavbarFooter */}
            <div className="mt-auto border-t border-amber-50/10 pt-8 flex flex-col md:flex-row justify-between gap-6 opacity-40 uppercase text-xs tracking-widest">
              {/* 1 */}
              <div className="flex flex-col gap-2">
                <p>
                  &copy; {new Date().getFullYear()} Dynamic{" "}
                  <p>Interior Design Studio</p>
                </p>
              </div>

              {/* 2 */}
              <div className="flex gap-8">
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
