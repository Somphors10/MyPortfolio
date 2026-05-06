
import { useEffect } from "react";
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Service from './components/Service'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLanguage } from "./context/LanguageContext";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
   <div className={`page-mesh ${lang === "km" ? "font-km" : "font-en"} ${theme === "dark" ? "dark bg-surface-dark text-slate-100" : "bg-surface text-slate-900"} transition-colors duration-500 min-h-screen relative overflow-x-hidden`}>
      <NavBar />
      {/* Spacer for fixed header (matches NavBar bar + safe area) */}
      <div
        className="shrink-0"
        style={{ height: "calc(4.25rem + env(safe-area-inset-top, 0px))" }}
        aria-hidden
      />
      <div className="relative">
      <div className="floating-orb w-[22rem] h-[22rem] bg-violet-400 -top-24 -left-20" />
      <div className="floating-orb w-[26rem] h-[26rem] bg-fuchsia-400/90 top-[18%] -right-32" style={{ animationDelay: "1.2s" }} />
      <div className="floating-orb w-72 h-72 bg-indigo-400 bottom-10 left-[25%]" style={{ animationDelay: "2.4s" }} />
      <div className="relative z-10">
        <div data-reveal className="reveal-on-scroll"><Hero/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "80ms" }}><About/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "120ms" }}><Service/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "160ms" }}><Projects/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "200ms" }}><Experience/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "240ms" }}><Testimonials/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "280ms" }}><Contact/></div>
        <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "320ms" }}><Footer/></div>
      </div>
      </div>
   </div>
  )
}

export default App
