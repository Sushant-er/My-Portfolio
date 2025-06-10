import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import cg from "../assets/card.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg");
      } else {
        navbar.classList.remove("shadow-lg");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 bg-[#0c0e1e] shadow-md flex justify-between items-center"
      style={{
        backgroundImage: "url(" + cg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#16f2b3] text-2xl font-bold cursor-pointer">
        Sushant Kumar Gond
      </h1>
      
      <div className="md:hidden text-gray-300 text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
      
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex space-x-6 text-gray-300 text-sm uppercase bg-[#0c0e1e] md:bg-transparent transition-all duration-300 ${
          isOpen ? "block p-4" : "hidden"
        } md:flex`}
      >
        {["About", "Experience", "Skills", "Education", "Projects"].map((item) => (
          <li key={item} className="p-2 md:p-0">
            <a href={`#${item.toLowerCase()}`} className="hover:text-[#16f2b3] cursor-pointer block">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
