import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-14 text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="glass-card mb-10 flex flex-col gap-8 rounded-2xl p-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Somphors</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t("footer.description")}</p>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("footer.enterEmail")}
              className="input-elegant rounded-xl sm:rounded-r-none sm:border-r-0"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 sm:rounded-l-none sm:rounded-r-xl"
            >
              {t("footer.subscribe")}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200/80 pt-8 dark:border-slate-800 md:flex-row">
          <p className="order-2 text-sm text-slate-500 dark:text-slate-400 md:order-1">
            &copy; {new Date().getFullYear()} Somphors
          </p>
          <div className="order-1 flex gap-3 md:order-2">
            {[
              { href: "https://www.facebook.com/som.phors.922685", Icon: FaFacebook, label: "Facebook" },
              { href: "https://www.linkedin.com/in/srorn-chansomphors-1b579030b/", Icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://github.com/Somphors10", Icon: FaGithub, label: "GitHub" },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-500 transition hover:border-purple-400 hover:bg-purple-500/10 hover:text-violet-600 dark:border-slate-600 dark:text-slate-400 dark:hover:border-fuchsia-500/50 dark:hover:text-fuchsia-300"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="order-3 flex gap-6 text-sm">
            <a href="#" className="text-slate-500 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-fuchsia-300">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-slate-500 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-fuchsia-300">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
