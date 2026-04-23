import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-white");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 50 ? "bg-purple-50/95" : "bg-white/95");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${navbarColor} text-black border-b sticky top-0 z-50 backdrop-blur transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Row */}
        <div className="h-16 grid grid-cols-[1fr_auto] md:grid-cols-3 items-center">
          {/* Left: Logo */}
          <a
            href="#home"
            className="text-3xl font-bold justify-self-start whitespace-nowrap"
            onClick={closeMenu}
          >
            Somphors
          </a>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex justify-self-center items-center flex-nowrap gap-4 lg:gap-6 text-sm lg:text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-purple-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Desktop Button */}
          <div className="hidden md:block justify-self-end">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-full hover:opacity-90 transform transition duration-200 hover:scale-105 whitespace-nowrap"
            >
              Connect Me
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="md:hidden justify-self-end text-2xl p-1"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-purple-600 transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="w-fit bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-full hover:opacity-90"
              onClick={closeMenu}
            >
              Connect Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;