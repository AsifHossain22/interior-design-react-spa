import { BadgeDollarSign, Menu } from "lucide-react";
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
          <button className="lg:hidden p-2">
            <Menu className="size-10" />
          </button>
        </div>
      </header>

      {/* MobileNavbar */}
    </>
  );
};

export default Header;
