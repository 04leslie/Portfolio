import React from 'react'

function Skills() {
  return (
    <div id='skills' className='skills scroll-mt-24 p-6'>
      <h2 className="section-title animate-slide text-2xl">My Skills</h2>
      <p className="skills-intro mb-4">
        Core engineering skills I’ve mastered over the years ⚙️
      </p>

      <div className='skills-section flex gap-6 flex-wrap '>
          <p>⚡ Circuit Design</p>
          <p>🔋 Power Systems</p>
          <p>💻 Microcontroller Programming</p>
          <p>🌍 Renewable Energy</p>
          <p>🔧 Troubleshooting</p>
          <p>📐 AutoCAD Electrical</p>
      </div>
    </div>
  )
}

export default Skills