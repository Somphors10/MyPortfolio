import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'
import { useLanguage } from "../context/LanguageContext";
const Footer = () => {
    const {t} = useLanguage();
  return (
    <footer className='bg-white dark:bg-gray-950 text-black dark:text-gray-100 py-8 transition-colors duration-300'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>Somphors</h3>
                    <p className='text-gray-400 dark:text-gray-300'>{t("footer.description")}</p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>
                        <input type="email" placeholder={t("footer.enterEmail")} 
                        className='w-full p-2 rounded-l-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-purple-500'/>
                        <button type='submit' className='bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white 
                        px-4 py-2 rounded-r-lg'>{t("footer.subscribe")}</button>
                    </form>
                </div>
            </div>

            <div className='border-t border-gray-300 dark:border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400 dark:text-gray-300'>
                    &copy; {new Date().getFullYear()}
                </p>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="#" className='text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'>
                        <FaFacebook/>
                    </a>
                    <a href="#" className='text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'>
                        <FaLinkedin/>
                    </a>
                    <a href="#" className='text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'>
                        <FaTwitter/>
                    </a>
                    <a href="#" className='text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'>
                        <FaGithub/>
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <a href="#" className='text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'>
                        {t("footer.privacy")}
                    </a>
                    <a href="#" className='text-gray-400 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'>
                        {t("footer.terms")}
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer