import React, { useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const MD_UP = "(min-width: 768px)";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MD_UP);
    const onChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const barOffset = "calc(4.25rem + env(safe-area-inset-top, 0px))";

  const topBarClass = `border-b transition-all duration-300 ${isScrolled || isOpen
      ? "border-purple-200/50 bg-white/92 shadow-md backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/92"
      : "border-transparent bg-white/80 backdrop-blur-md dark:bg-slate-950/80"
    }`;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 text-slate-900 dark:text-slate-100"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className={`${topBarClass} relative`}>
          <nav aria-label="Primary">
            <div className="mx-auto grid h-[4.25rem] max-w-7xl grid-cols-[1fr_auto] items-center px-4 md:grid-cols-[auto_1fr_auto] md:px-8 md:gap-8 lg:px-12">
              <a
                href="#home"
                className="justify-self-start text-xl font-extrabold tracking-tight md:text-2xl"
                onClick={closeMenu}
              >
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-500 bg-clip-text text-transparent">
                  Somphors
                </span>
              </a>

              <div className="hidden items-center justify-center gap-1 md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                        ? "bg-purple-500/12 text-violet-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-200"
                        : "text-slate-600 hover:bg-purple-500/10 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-200"
                      }`}
                    aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="hidden items-center justify-end gap-2 md:flex">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:border-purple-300 hover:text-violet-600 dark:border-slate-600 dark:bg-slate-900 dark:text-amber-300 dark:hover:border-fuchsia-500/50"
                >
                  {theme === "dark" ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
                </button>
                <div className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-100/80 p-1 dark:border-slate-600 dark:bg-slate-800/80">
                  <button
                    type="button"
                    onClick={() => lang === "km" && toggleLanguage()}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${lang === "en"
                        ? "bg-white text-violet-700 shadow-sm dark:bg-slate-700 dark:text-white"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                      }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => lang === "en" && toggleLanguage()}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${lang === "km"
                        ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                      }`}
                  >
                    ខ្មែរ
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="justify-self-end rounded-lg p-2 text-2xl text-slate-700 transition hover:bg-purple-500/10 dark:text-slate-200 md:hidden"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-panel"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </nav>
        </div>

        {isOpen && (
          <div
            id="mobile-nav-panel"
            className="absolute inset-x-0 top-full z-[48] border-t border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-950 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] md:px-8 lg:px-12">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-3 text-base font-medium transition-colors ${activeSection === link.href.slice(1)
                        ? "bg-purple-500/12 text-violet-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-200"
                        : "text-slate-900 hover:bg-purple-500/10 hover:text-violet-700 active:bg-purple-500/15 dark:text-slate-100 dark:hover:bg-fuchsia-500/10"
                      }`}
                    onClick={closeMenu}
                    aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-200/60 pt-4 dark:border-slate-700/60">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-600 dark:bg-slate-900"
                >
                  {theme === "dark" ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
                </button>
                <div className="inline-flex items-center rounded-full border border-slate-200 p-1 dark:border-slate-600 dark:bg-slate-800">
                  <button
                    type="button"
                    onClick={() => lang === "km" && toggleLanguage()}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${lang === "en" ? "bg-white shadow dark:bg-slate-700" : ""
                      }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => lang === "en" && toggleLanguage()}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${lang === "km" ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white" : ""
                      }`}
                  >
                    ខ្មែរ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
