import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'
import { useLanguage } from "../context/LanguageContext";
const Contact = () => {
    const {t} = useLanguage();
    return (
        <div className='bg-white dark:bg-gray-950 text-black dark:text-gray-100 py-20 transition-colors duration-300' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
                <h2 className='text-4xl font-bold text-center mb-12'>{t("contact.title")}</h2>
                <div className='flex flex-col md:flex-row items-stretch md:space-x-12 gap-6'>
                    <div className='flex-1 glass-card rounded-2xl p-6'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 mb-4'>{t("contact.subtitle")}</h3>
                        <p>{t("contact.description")}</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className="inline-block text-purple-500 mr-2" />
                            <a href="milto:srornchansomphors@gmail.com" className='hover:underline'>
                                srornchansomphors@gmail.com
                            </a>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaPhone className="inline-block text-purple-500 mr-2" />
                            <a href="milto:srornchansomphors@gmail.com" className='hover:underline'>
                                <span>+855718120309</span>
                            </a>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaMapMarkedAlt className="inline-block text-purple-500 mr-2" />
                            <span>{t("contact.location")}</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full glass-card rounded-2xl p-6'>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor="name">{t("contact.form.name")}</label>
                                <input type="text"
                                    className='w-full p-2 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-purple-500'
                                    placeholder={t("contact.form.enterName")} />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>{t("contact.form.email")}</label>
                                <input type="text"
                                    className='w-full p-2 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-purple-500'
                                    placeholder={t("contact.form.enterEmail")} />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>{t("contact.form.message")}</label>
                                <textarea type="text"
                                    className='w-full p-2 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-purple-500'
                                    rows="5"
                                    placeholder={t("contact.form.enterMessage")} />
                            </div>
                            <button className='bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline 
                    transform transition-transform duration-100 hover:scale-105 px-6 py-2 rounded-full'>{t("contact.form.send")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact