import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const items = t("experience.items") || [];

  return (
    <section
      className="section-shell border-b border-purple-100/40 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800/60 dark:text-slate-100"
      id="experience"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t("experience.title") || "Experience"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            {t("experience.subtitle") || "A quick timeline of my recent learning and project journey."}
          </p>
          <div className="section-title-line" />
        </div>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <article key={`${item.role}-${idx}`} className="glass-card rounded-2xl p-6 md:p-7">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                  <p className="text-sm font-semibold text-violet-700 dark:text-fuchsia-300">
                    {item.company}
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-purple-500/30 dark:bg-purple-950/50 dark:text-fuchsia-200">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
