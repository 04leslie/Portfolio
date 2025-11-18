import React, { useState } from "react"
import Panel from '../assets/panelInstallation.jpg'
import Wire from '../assets/wiringInstallation.jpg'
import Bulb from '../assets/light bulb.jpg'

function Projects() {

    const projects = [
  {
    image: Panel,
    title: "Solar Panel Installation",
    description: "Installed solar panels in over 20 homes across Bamenda.",
  },
  {
    image: Wire,
    title: "Home Wiring Project",
    description: "Complete wiring for a 4-bedroom apartment in Douala.",
  },
  {
    image: Bulb,
    title: "Inverter Setup",
    description: "Installed inverter + battery backup system for 3 offices.",
  },
 ];

 const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div id='projects' className='scroll-mt-22 p-6'>
        <h2 className="section-title animate-slide text-2xl">Completed Projects</h2>
        <p>
            A few examples of the real-world electrical projects successfully
            completed, showcasing expertise in installation, wiring, and renewable
            energy systems.
        </p>
                <br />
        {/* Project Viewer */}
      <div className="max-w-xl mx-auto text-center">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-72 object-cover rounded-xs shadow-lg"
        />

        <h3 className="text-xl font-semibold mt-4">{currentProject.title}</h3>

        <p className="text-gray-400 mt-2">{currentProject.description}</p>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            onClick={prev}
            className="px-4 py-2 rounded bg-[#3399ff]! text-white hover:bg-[#604FCD] transition"
          >
            ← Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 rounded bg-[#3399ff]! text-white hover:bg-[#604FCD]"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects