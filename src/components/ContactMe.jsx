import React from "react";
import cg from "../assets/card.png";

const ContactMe = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16" style={{
        backgroundImage: "url(" + cg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <h2 className="text-3xl font-bold text-[#16f2b3] mb-12">Contact Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 w-full lg:w-3/4 ">
        <div className="bg-[#0f0b34] p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 text-[#16f2b3]">Send a Message</h3>
          <form
          action="https://getform.io/f/bgdljxea"
          method="POST"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-[#0c0e1e] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-[#0c0e1e] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 bg-[#0c0e1e] border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#16f2b3] text-[#0c0e1e] font-bold py-3 rounded-lg hover:bg-[#13d9a1] transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-start bg-[#0f0b34] p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 text-[#16f2b3]">Get in Touch</h3>
          <p className="text-gray-300 mb-4">
            <strong>Email:</strong> iamsushant431@gmail.com
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Phone:</strong> +91-9026986117
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Sushant-er"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] text-2xl hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sushant-kumar-gond-a852a6203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] text-2xl hover:text-white transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] text-2xl hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            {/* <a
              href="https://facebook.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] text-2xl hover:text-white transition"
            >
              <i className="fab fa-facebook"></i>
            </a> */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
