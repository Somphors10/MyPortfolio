import React from "react";
import Mypic from "../assets/port4.jpg";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-black text-center py-16" id="home">
      <img
        src={Mypic}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-4xl font-bold">
        {t("hero.intro")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
          Srorn chansomphors
        </span>
        , {t("hero.role")}
      </h1>

      <p className="mt-4 text-lg text-gray-500 px-4 md:px-32">
        {t("hero.desc")}
      </p>

      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full">
          {t("hero.contactBtn")}
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full">
          {t("hero.resumeBtn")}
        </button>
      </div>
    </div>
  );
};

export default Hero;