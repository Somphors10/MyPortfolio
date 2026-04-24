import React from 'react'
import { useLanguage } from "../context/LanguageContext";

const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly web designs.",
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing robust server-side logic and databased",
    },
    {
        id: 4,
        title: "Full-stack Development",
        description: "Combaining both frontend and backend development skills.",
    },
    {
        id: 5,
        title: "Content Writing",
        description: "Writing content for your business and companies.",
    },
    {
        id: 6,
        title: "Digital Marketing",
        description: "Promote your business with our digital marketing team.",
    },
];

const Service = () => {
    const { t } = useLanguage();
    const serviceItems = t("services.items");
  return (
    <div className='section-shell bg-white dark:bg-gray-950 text-black dark:text-gray-100 py-20 transition-colors duration-300' id='services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
            <h2 className='text-4xl font-bold text-center mb-12'>{t("services.title")}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map((service) => (
                    <div key={service.id}
                    className='glass-card group m-2 p-6 px-6 pb-6 rounded-2xl hover:shadow-xl hover:shadow-purple-500/20 transform transition-all duration-300 hover:-translate-y-2'>
                        <div className='text-right text-xl font-bold text-transparent 
                        bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500'>
                            0{service.id}
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500'>
                            {serviceItems?.[service.id - 1]?.title || service.title}
                        </h3>
                        <p className='mt-2 text-gray-500 dark:text-gray-300'>{serviceItems?.[service.id - 1]?.description || service.description}</p>
                        <a href="#" className='mt-4 inline-block text-purple-500 hover:text-purple-700 group-hover:translate-x-1 transition-transform'>{t("services.readMore")} -&gt;</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Service