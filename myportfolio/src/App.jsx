
import { useEffect } from "react";
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Service from './components/Service'
import Projects from './components/Projects'
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
   <div className={`${lang === "km" ? "font-km" : "font-en"} ${theme === "dark" ? "dark bg-gray-950 text-gray-100" : "bg-white text-black"} transition-colors duration-300 min-h-screen`}>
      <NavBar/>
      <div data-reveal className="reveal-on-scroll"><Hero/></div>
      <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "80ms" }}><About/></div>
      <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "120ms" }}><Service/></div>
      <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "160ms" }}><Projects/></div>
      <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "200ms" }}><Contact/></div>
      <div data-reveal className="reveal-on-scroll" style={{ "--reveal-delay": "240ms" }}><Footer/></div>
   </div>
  )
}

export default App
