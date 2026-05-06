import React from "react";
import Mypic from "../assets/skin.jpg";
import Mypic1 from "../assets/coza1.jpg";
import Mypic2 from "../assets/dashboard.jpg";
import Mypic4 from "../assets/pro4.jpg"
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const projects = [
  {
    id: 1,
    name: "COZA STORE",
    technologies: "React JS",
    image: Mypic1,
    link: "https://coza-shop.vercel.app",
  },
  {
    id: 2,
    name: "SS Face Skin",
    technologies: "React JS",
    image: Mypic,
    link: "https://skin-product-nine.vercel.app",
  },
  {
    id: 3,
    name: "Employee MS",
    technologies: "Javascript",
    image: Mypic2,
    link: "https://dash-board-shop-nine.vercel.app",
  },
  {
    id: 4,
    name: "Auto Nova",
    technologies: "React JS",
    image: Mypic4,
    link: "https://react-selling-car.vercel.app",
  },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      className="section-shell border-b border-purple-100/40 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800/60 dark:text-slate-100"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t("projects.title")}</h2>
          <div className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <span className="mt-2 inline-flex w-fit rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-purple-500/30 dark:bg-purple-950/50 dark:text-fuchsia-200">
                  {project.technologies || t("projects.tech")}
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {t("projects.roleLabel") || "My role"}:{" "}
                  <span className="font-normal">
                    {t("projects.defaultRole")}
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t("projects.defaultResult")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      className="btn-primary text-xs sm:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.viewLive")}
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-dashed border-slate-300 px-4 py-2.5 text-xs font-medium text-slate-500 dark:border-slate-600 dark:text-slate-500">
                      {t("projects.comingSoon")}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
