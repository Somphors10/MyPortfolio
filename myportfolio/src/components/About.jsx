import React, { useEffect, useRef, useState } from 'react'
import SP from '../assets/port3.jpg'
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
    <div ref={sectionRef} className='bg-white dark:bg-gray-950 text-black dark:text-gray-100 py-20 transition-colors duration-300' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
        <h2 className='text-4xl font-bold text-center mb-12'>{t("about.title")}</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={SP} alt="" 
            className='w-72 h-80 rounded-2xl object-cover mb-8 md:mb-0 shadow-xl'/>
            <div className='flex-1'>
                <p className='text-lg mb-8'>
                    {t("about.description")}
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="htmlandcss" className='w-5/12 md:w-4/12 text-sm md:text-base'>{t("about.skills.htmlCss")}</label>
                        <div className='grow bg-gray-800 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden'>
                            <div
                                className='bg-gradient-to-r from-purple-500 to-fuchsia-500 h-2.5 rounded-full transform transition-[width,transform] duration-1000 ease-out hover:scale-105'
                                style={{ width: animateBars ? "90%" : "0%" }}
                            >

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="reactjs" className='w-5/12 md:w-4/12 text-sm md:text-base'>{t("about.skills.react")}</label>
                        <div className='grow bg-gray-800 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden'>
                            <div
                                className='bg-gradient-to-r from-purple-500 to-fuchsia-500 h-2.5 rounded-full transform transition-[width,transform] duration-1000 ease-out hover:scale-105'
                                style={{ width: animateBars ? "70%" : "0%", transitionDelay: "120ms" }}
                            >

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="vuejs" className='w-5/12 md:w-4/12 text-sm md:text-base'>{t("about.skills.spring")}</label>
                        <div className='grow bg-gray-800 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden'>
                            <div
                                className='bg-gradient-to-r from-purple-500 to-fuchsia-500 h-2.5 rounded-full transform transition-[width,transform] duration-1000 ease-out hover:scale-105'
                                style={{ width: animateBars ? "70%" : "0%", transitionDelay: "240ms" }}
                            >

                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
                    <div className='glass-card rounded-xl py-4'>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500'>
                            1+
                        </h3>
                        <p>{t("about.stats.years")}</p>
                    </div>
                    <div className='glass-card rounded-xl py-4'>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500'>
                            10+
                        </h3>
                        <p>{t("about.stats.projects")}</p>
                    </div>
                    <div className='glass-card rounded-xl py-4'>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500'>
                            7+
                        </h3>
                        <p>{t("about.stats.clients")}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
