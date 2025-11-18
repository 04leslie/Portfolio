import React from 'react'
import HeroImg from '../assets/creative.png'

function Hero() {
  return (
    <div id='hero' className='scroll-mt-24 hero-section flex p-6 justify-between items-center'>
        <div>
            <h2>John Doe</h2>
            <h1>Freelance Electrical Engineer⚡</h1> <br />
            <p>
                I design, build, and maintain reliable electrical systems for homes, industries, and embedded applications.
            </p> <br />

            <div className="hero-buttons flex gap-7">
                <a href="https://wa.me/237693416651" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Hire Me
                </a>
                <a href="#projects" className="btn-secondary">
                    View Projects
                </a>
          </div>
        </div>

        <div>
            <img src={HeroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero