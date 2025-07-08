import React from 'react'
import Mypic from "../assets/port1.jpg"
import Mypic1 from "../assets/pic1.svg"

const projects = [
    {
        id: 1,
        name: "Nexcent",
        technologies: "MERN Stack",
        image: Mypic1,
        github: "https://somphors.innersparrow.com/",
    },
    {
        id: 2,
        name: "YouTube clone",
        technologies: "MERN Stack",
        image: Mypic,
        github: "https://github.com/Somphors10/TempYoutue",
    },
    {
        id: 3,
        name: "Employee MS",
        technologies: "MERN Stack",
        image: Mypic,
        github: "",
    },
];

const Projects = () => {
  return (
    <div className='bg-white text-black py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project) => (
                    <div key={project.id} className='bg-white border-2 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
                        <h3 className='text-2xl font-bold mb-2 '>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' 
                        target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects