import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
  title: "QuickGPT – AI Chat Application",
  description:
    "A fast and user-friendly AI chat app built with React, Node.js, and MongoDB featuring secure JWT login, saved chat history, credit-based message system, and smooth real-time responses.",
  link: "https://quick-gpt-sable.vercel.app/",
  },
  {
    title: "ThinkFashion – MERN eCommerce Website",
   description:
    "A secure and scalable MERN-based eCommerce platform with JWT login, Google OAuth, Stripe payments, and full admin controls for managing products, users, orders, and reviews.",
    link: "https://thinkfashion-random.vercel.app/",
   },
    {
      title: "Employee Management System",
      description:
        "A role-based Employee Management System using React.js and Tailwind CSS with role-specific dashboards, task assignment, and localStorage-based authentication.",
      link: "https://ems-bxj4.onrender.com",
    },
    {
      title: "Amazon Clone",
      description:
        "A Amazon homepage clone using HTML and CSS, showcasing layout design, semantic structure, and styling with Flexbox and media queries.",
      link: "https://amazon-copy.onrender.com",
    },
    {
      title: "Lazarev website clone",
      description:
        "A fully responsive, animation-rich Lazarev website clone using HTML, CSS, JavaScript, and GSAP with smooth transitions, interactive menus, and modern UI design.",
      link: "https://github.com/Sushant-er/Frontend-Project/tree/main/LAZAREV",
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16">
      <motion.h2
        className="text-3xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col bg-[#0f0b34] p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#14124a]"
          >
            <h3 className="text-xl font-bold text-[#16f2b3]">{project.title}</h3>
            <p className="text-gray-300 mt-4">{project.description}</p>
            <div className="flex">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-[#16f2b3] underline hover:text-white"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
