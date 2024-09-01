import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-black');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('bg-gray-700 ');
      } else {
        setNavbarColor('bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarColor} text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50 transition-colors duration-300`}>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Somphors</div>
        <div className='space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#services" className='hover:text-gray-400'>Services</a>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
        transform transition-transform duration-100 hover:scale-105 px-4 py-2 rounded-full'>Connet Me</button>
      </div>
    </nav>
  );
}

export default NavBar;
