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
    <div className="bg-white dark:bg-gray-950 text-black dark:text-gray-100 text-center py-16 transition-colors duration-300" id="home">
      <img
        src={Mypic}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-4xl font-bold">
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

      <div className="mt-8 space-x-4">
        <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full">
          {t("hero.contactBtn")}
        </a>
        <a
          href="/Srorn_Chansomphors_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full"
        >
          {t("hero.resumeBtn")}
        </a>
      </div>
    </div>
  );
};

export default Hero;