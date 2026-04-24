import React, { useState } from "react";
import {
  FaBullhorn,
  FaLaptopCode,
  FaLayerGroup,
  FaPaintBrush,
  FaPenFancy,
  FaServer,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    Icon: FaPaintBrush,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    Icon: FaLaptopCode,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databased",
    Icon: FaServer,
  },
  {
    id: 4,
    title: "Full-stack Development",
    description: "Combaining both frontend and backend development skills.",
    Icon: FaLayerGroup,
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
    Icon: FaPenFancy,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
    Icon: FaBullhorn,
  },
];

const Service = () => {
  const { t } = useLanguage();
  const serviceItems = t("services.items");
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="section-shell border-b border-purple-100/40 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800/60 dark:text-slate-100"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t("services.title")}</h2>
          <div className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <article
                key={service.id}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 transition-opacity group-hover:opacity-100 dark:from-violet-500/20 dark:to-fuchsia-500/10" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md">
                    <Icon className="text-lg" aria-hidden />
                  </div>
                  <span className="text-3xl font-black tabular-nums text-slate-200 dark:text-slate-700">
                    {String(service.id).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  {serviceItems?.[service.id - 1]?.title || service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {serviceItems?.[service.id - 1]?.description || service.description}
                </p>
                <button
                  type="button"
                  onClick={() => toggleDetails(service.id)}
                  className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 transition hover:gap-2 dark:text-fuchsia-400"
                  aria-expanded={expandedId === service.id}
                  aria-controls={`service-detail-${service.id}`}
                >
                  {expandedId === service.id
                    ? t("services.readLess") || "Read Less"
                    : t("services.readMore")}
                  <span
                    aria-hidden
                    className={`transition-transform duration-200 ${
                      expandedId === service.id ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>

                {expandedId === service.id ? (
                  <div
                    id={`service-detail-${service.id}`}
                    className="mt-4 rounded-xl border border-purple-200/60 bg-purple-50/60 p-4 text-sm leading-relaxed text-slate-700 dark:border-fuchsia-500/30 dark:bg-slate-800/60 dark:text-slate-300"
                  >
                    {serviceItems?.[service.id - 1]?.detail ||
                      serviceItems?.[service.id - 1]?.description ||
                      service.description}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
