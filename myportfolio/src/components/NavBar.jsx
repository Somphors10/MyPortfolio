import React, { useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { t, lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${isScrolled ? "bg-purple-50/95 dark:bg-gray-900/95" : "bg-white/95 dark:bg-gray-950/95"} text-black dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur transition-colors duration-300`}
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
          <div className="hidden md:flex justify-self-end items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:scale-105 transition"
            >
              {theme === "dark" ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
            </button>
            <div className="inline-flex items-center p-1 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => lang === "km" && toggleLanguage()}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  lang === "en"
                    ? "bg-white text-gray-700 shadow-sm"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => lang === "en" && toggleLanguage()}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  lang === "km"
                    ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                }`}
              >
                ខ្មែរ
              </button>
            </div>
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
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-gray-200 dark:border-gray-800 pt-3">
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

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-fit p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-300 transition"
            >
              {theme === "dark" ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
            </button>
            <div className="w-fit inline-flex items-center p-1 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => lang === "km" && toggleLanguage()}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  lang === "en"
                    ? "bg-white text-gray-700 shadow-sm"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => lang === "en" && toggleLanguage()}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  lang === "km"
                    ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                }`}
              >
                ខ្មែរ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;