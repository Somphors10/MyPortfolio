import React, { useEffect, useRef, useState } from "react";
import SP from "../assets/my.jpg";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b border-purple-100/40 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800/60 dark:text-slate-100"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t("about.title")}</h2>
          <div className="section-title-line" />
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 opacity-80 blur-sm dark:opacity-50" />
              <img
                src={SP}
                alt=""
                className="relative w-72 max-w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/50 dark:ring-slate-700/50 sm:h-[22rem] sm:w-80"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{t("about.description")}</p>

            <div className="mt-10 space-y-5">
              {[
                { label: t("about.skills.htmlCss"), width: "90%", delay: "0ms" },
                { label: t("about.skills.react"), width: "70%", delay: "120ms" },
                { label: t("about.skills.spring"), width: "70%", delay: "240ms" },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <label className="shrink-0 text-sm font-medium text-slate-700 dark:text-slate-200 sm:w-[40%]">
                    {row.label}
                  </label>
                  <div className="grow overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-[width] duration-1000 ease-out"
                      style={{
                        width: animateBars ? row.width : "0%",
                        transitionDelay: row.delay,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: "1+", label: t("about.stats.years") },
                { value: "10+", label: t("about.stats.projects") },
                { value: "7+", label: t("about.stats.clients") },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl px-4 py-6 text-center transition hover:-translate-y-0.5"
                >
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
