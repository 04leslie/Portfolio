import React from 'react'
import homewiring from '../assets/home wiring.jpg'
import industrialwiring from '../assets/industrial wiring.jpg'
import circuitdiagram from '../assets/circuit diagram.jpg'
import generator from '../assets/solar-panel.jpg'
import smartlighting from '../assets/smart lighting.jpg'
import lightbulb from '../assets/light bulb.jpg'

const services = [
  {
    title: "Home Wiring & Electrical Installation",
    description: "Installing and maintaining home electrical systems safely and efficiently.",
    image: homewiring
  },
  {
    title: "Commercial & Industrial Wiring",
    description: "Designing and installing electrical systems for offices, factories, and shops.",
    image:industrialwiring
  },
  {
    title: "Circuit Design & Troubleshooting",
    description: "Creating custom circuit layouts and diagnosing electrical faults.",
    image: circuitdiagram
  },
  {
    title: "Power Systems & Backup Solutions",
    description: "Installing generators, UPS systems, and backup solutions for homes and businesses.",
    image: generator
  },
  {
    title: "Lighting Design & Automation",
    description: "Energy-efficient and smart lighting solutions for residential and commercial spaces.",
    image: smartlighting
  },
  {
    title: "Supply of Electrical Appliances",
    description: "Providing high-quality electrical devices, from bulbs to solar panels and more.",
    image:lightbulb
  },
];


function Services() {
  return (
    <div id='services' className='scroll-mt-24 p-6'>

        <h2 className="text-2xl section-title animate-slide">Services</h2> <br />

        <div  className='services-section flex gap-6 flex-wrap place-content-center'>
            {services.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-200 h-110"
          >
            <img src={item.image} alt={item.title} className="mb-4 w-full h-48 object-cover rounded-t-xs"/>
            <h3 className="text-xl font-semibold mb-3 m-4">{item.title}</h3>
            <p className="mb-5 text-gray-300 m-4">{item.description}</p>
            <a
              href="https://wa.me/237123456789?text=Good%20day%20sir!%20I'm%20interested%20in%20your%20electrical%20services."
              className="self-start px-4 py-2 bg-[#3399ff] text-white rounded-lg hover:bg-[#604FCD] transition m-4"
            >
              Contact
            </a>
          </div>
            ))}
        </div>
    
    </div>
  )
}

export default Services