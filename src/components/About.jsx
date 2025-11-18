import React from 'react'
import HeroImg from '../assets/electricity.png'

function About() {
  return (
    <div id='about' className='scroll-mt-24 about-section animate-fade gap-5 flex p-6 justify-between items-center'>
        <div>
            <h2 className='text-2xl section-title animate-slide'>About Me</h2>
            <p>
                I’m John Doe, an Electrical Engineer passionate about designing innovative
                solutions for modern energy challenges. From circuit design to automation
                and renewable energy systems, I combine technical expertise with creative
                problem-solving to bring ideas to life.
            </p>
        </div>
        <div>
            <img src={HeroImg} alt="" />
        </div>
    </div>
  )
}

export default About