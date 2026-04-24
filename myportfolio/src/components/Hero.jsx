import React, { useEffect, useState } from "react";
import Mypic from "../assets/port4.jpg";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, lang } = useLanguage();
  const fullName = lang === "km" ? "ស្រ៊ន់ ចាន់សម្ផស្ស" : "Srorn Chansomphors";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    setTypedName("");
    let index = 0;
    const typingTimer = setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));

      if (index >= fullName.length) {
        clearInterval(typingTimer);
      }
    }, 110);

    return () => clearInterval(typingTimer);
  }, [lang]);

  return (
    <div className="section-shell bg-white/80 dark:bg-gray-950/70 text-black dark:text-gray-100 text-center py-20 transition-colors duration-300" id="home">
      <img
        src={Mypic}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover ring-4 ring-purple-200 dark:ring-purple-600/40 shadow-xl transform transition-transform duration-300 hover:scale-105"
      />

      <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium mb-5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Open to freelance and full-time roles
      </p>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {t("hero.intro")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
          {typedName}
          <span className="typing-cursor">|</span>
        </span>
        , {t("hero.role")}
      </h1>

      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 px-4 md:px-32">
        {t("hero.desc")}
      </p>

      <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
        <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white transform transition-transform duration-200 hover:scale-105 px-5 py-2.5 rounded-full shadow-lg shadow-purple-500/20">
          {t("hero.contactBtn")}
        </a>
        <a
          href="/Srorn_Chansomphors_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-purple-300 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 bg-white/80 dark:bg-gray-900/80 transform transition duration-200 hover:scale-105 hover:border-purple-500 px-5 py-2.5 rounded-full"
        >
          {t("hero.resumeBtn")}
        </a>
      </div>
    </div>
  );
};

export default Hero;