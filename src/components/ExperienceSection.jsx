import React from "react";
import cg from "../assets/card.png";
import ex from "../assets/exper.png";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "July 2024 - August 2024",
      title: "Web Developer Intern",
      company: "UNIFIED MENTOR",
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
      style={{
        backgroundImage: "url(" + cg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-3xl font-bold text-[#16f2b3] mb-12 text-center">Experiences</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
        <div className="flex justify-center items-center">
          <img
            src={ex}
            alt="Experience Illustration"
            className="w-96"
          />
        </div>
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center bg-[#0f0b34] p-6 rounded-lg shadow-md"
            >
              <div className="text-purple-400 text-4xl mr-6">
                <i className="fas fa-user-tie"></i>
              </div>
              <div>
                <p className="text-[#16f2b3] text-lg font-semibold">
                  {exp.period}
                </p>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-300">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
