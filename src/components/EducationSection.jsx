import React from "react";
import { motion } from "framer-motion";
import edu from "../assets/edulogo.png";

const EducationSection = () => {
  const educationData = [
    {
      year: "2021 - 2025",
      title: "BACHELORS",
      institution: "Greater Noida Institute of Technology, Greater Noida",
    },
    {
      year: "2019 - 2020",
      title: "HIGHER SECONDARY CERTIFICATE",
      institution: "Jawahar Navodaya Vidyalaya, Gorakhpur",
    },
    {
      year: "2017 - 2018",
      title: "SECONDARY SCHOOL CERTIFICATE",
      institution: "Jawahar Navodaya Vidyalaya, Gorakhpur",
    },
  ];

  return (
    <div
      id="education"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col justify-center py-16"
    >
      <motion.h2
        className="text-3xl font-bold text-[#16f2b3] text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Educations
      </motion.h2>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16">
        {/* Education Cards */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="grid grid-cols-1 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-[#0f0b34] p-6 rounded-lg shadow-md border-2 border-transparent hover:p-5 transition-all duration-300 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
              >
                <div className="text-purple-400 text-4xl mr-6">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div>
                  <p className="text-[#16f2b3] text-lg font-semibold">
                    {edu.year}
                  </p>
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Illustration Image */}
        <motion.div
          className="lg:w-1/3 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        >
          <img
            src={edu}
            alt="Education Illustration"
            className="w-96 mx-auto lg:mx-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
