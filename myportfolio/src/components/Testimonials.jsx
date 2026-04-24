import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const items = t("testimonials.items") || [];

  return (
    <section
      className="section-shell border-b border-purple-100/40 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800/60 dark:text-slate-100"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t("testimonials.title") || "Testimonials"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            {t("testimonials.subtitle") || "What people say about working with me."}
          </p>
          <div className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <article key={`${item.name}-${idx}`} className="glass-card rounded-2xl p-6">
              <FaQuoteLeft className="text-fuchsia-500/70" />
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.quote}
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
