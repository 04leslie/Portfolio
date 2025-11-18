import React, { useEffect } from 'react';

import './App.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    const headings = document.querySelectorAll('.section-title');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide');
          } else {
            entry.target.classList.remove('animate-slide');
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% is visible
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  useEffect(() => {
  const about= document.querySelector('.about-section');

  const observers = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade'); // add fade animation
        } else {
          entry.target.classList.remove('animate-fade'); // remove to allow replay
        }
      });
    },
    { threshold: 0.3 }
  );

  if (about) observers.observe(about);

  return () => {
    if (about) observers.unobserve(about);
  };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
