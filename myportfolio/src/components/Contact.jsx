import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: "", text: "" });
    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/srornchansomphors@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New portfolio contact message",
        }),
      });

      const data = await response.json();

      if (!response.ok || data?.success === "false") {
        throw new Error("Failed to submit");
      }

      setSubmitStatus({
        type: "success",
        text:
          t("contact.form.success") ||
          "Thanks for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        text:
          t("contact.form.error") ||
          "Message failed to send. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className="border-b border-purple-100/40 py-20 text-slate-900 transition-colors duration-300 dark:border-slate-800/60 dark:text-slate-100"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t("contact.title")}</h2>
          <div className="section-title-line" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent md:text-3xl">
              {t("contact.subtitle")}
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{t("contact.description")}</p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md">
                  <FaEnvelope />
                </span>
                <a
                  href="mailto:srornchansomphors@gmail.com"
                  className="min-w-0 break-all font-medium text-violet-700 underline-offset-2 hover:underline dark:text-fuchsia-300"
                >
                  srornchansomphors@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md">
                  <FaPhone />
                </span>
                <a
                  href="tel:+855718120309"
                  className="font-medium text-violet-700 underline-offset-2 hover:underline dark:text-fuchsia-300"
                >
                  +855 71 812 0309
                </a>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-md">
                  <FaMapMarkedAlt />
                </span>
                <p className="pt-2 font-medium leading-snug text-slate-800 dark:text-slate-200">{t("contact.location")}</p>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t("contact.form.name")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="input-elegant"
                  placeholder={t("contact.form.enterName")}
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t("contact.form.email")}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="input-elegant"
                  placeholder={t("contact.form.enterEmail")}
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="input-elegant min-h-[140px] resize-y"
                  rows={5}
                  placeholder={t("contact.form.enterMessage")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70" disabled={isSending}>
                {isSending
                  ? t("contact.form.sending") || "Sending..."
                  : t("contact.form.send")}
              </button>
              {submitStatus.text ? (
                <p
                  className={`text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {submitStatus.text}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
