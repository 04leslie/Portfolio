import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {

    const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id='contact' className='scroll-mt-24 p-6 contact-section'>
        <h2 className="section-title animate-slide text-2xl mb-2">
        Contact Me
       </h2>

      <div className="contact flex justify-around items-center">
          <div>
              <p className="opacity-80 mb-8 text-xl mt-6">
                <em>Have an electrical project in mind, need help, <br /> or want a quote? Send a message below <br /> and I’ll get back to you shortly.</em>
              </p>
          </div>
          {/* CONTACT FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5 bg-[#111] p-6 rounded-xl border border-gray-800 shadow-lg place-self-center"
          >
            <div>
              <label className="block mb-1 text-sm opacity-90">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-[#3399ff]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm opacity-90">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-[#3399ff]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm opacity-90">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-[#3399ff]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#3399ff]! hover:bg-[#277dcc] transition text-white font-semibold py-3 px-6 rounded-lg"
            >
              Send Message
            </button>
          </form>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 py-6 border-t border-gray-800 text-center opacity-70 text-sm">
        © {new Date().getFullYear()} John Doe — Electrical Engineer.
        <br />
        All Rights Reserved.
      </footer>

    </div>
  )
}

export default Contact