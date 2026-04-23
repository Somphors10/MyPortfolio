import React from 'react'
import Mypic from '../assets/port4.jpg'

const Hero = () => {
  return (
    <div className='bg-white text-black text-center py-16' id='home'>
      <img src={Mypic} alt="" 
      className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
      transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500'>Srorn chansomphors</span>
        ,Software Developer
      </h1>
      <p className='mt-4 text-lg text-gray-500 px-4 md:px-32'>
        I Specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4 '>
        <button className='bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline 
        transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full'>Contact with Me</button>
        <button className='bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hidden md:inline 
        transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
