import React, { useState } from 'react';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar flex justify-between p-3 items-center fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-md'>
        <a href="#hero" className="logo">John Doe</a>

        {/* Hamburger button (mobile) */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* desktop dropdown menu */}
        <ul className="nav-links flex gap-8 font-extrabold">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile dropdown menu */}
       {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 md:hidden">
          <ul className="flex flex-col items-start p-5 gap-5 text-white font-bold">
            <li><a onClick={() => setIsOpen(false)} href="#hero">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#services">Services</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
       )}
    </div>
  )
}

export default Navbar