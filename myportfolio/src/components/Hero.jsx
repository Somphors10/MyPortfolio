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
    <section
      className="section-shell relative overflow-hidden border-b border-purple-100/50 py-16 text-slate-900 transition-colors duration-300 dark:border-slate-800/80 dark:text-slate-100 md:py-24"
      id="home"
    >
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gradient-radial from-fuchsia-400/25 via-violet-500/10 to-transparent blur-2xl dark:from-fuchsia-600/15 dark:via-violet-600/10" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16 lg:gap-20">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm dark:border-purple-500/25 dark:bg-slate-900/60 dark:text-slate-200 md:mx-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-left leading-snug">{t("hero.badge")}</span>
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {t("hero.intro")}{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-500 bg-clip-text text-transparent">
                {typedName}
                <span className="typing-cursor">|</span>
              </span>
              <br className="hidden sm:block" />
              <span className="text-slate-800 dark:text-white">, {t("hero.role")}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:mx-0 md:text-lg">
              {t("hero.desc")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a href="#contact" className="btn-primary">
                {t("hero.contactBtn")}
              </a>
              <a
                href="/Srorn_Chansomphors_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t("hero.resumeBtn")}
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-500/30 to-purple-600/40 blur-xl dark:from-violet-500/30 dark:via-fuchsia-500/20" />
              <div className="relative rounded-full bg-gradient-to-br from-white to-purple-50 p-1.5 shadow-glow dark:from-slate-800 dark:to-slate-900 dark:shadow-glow-sm">
                <img
                  src={Mypic}
                  alt=""
                  className="h-44 w-44 rounded-full object-cover ring-4 ring-white/90 dark:ring-slate-800 sm:h-52 sm:w-52 md:h-56 md:w-56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
