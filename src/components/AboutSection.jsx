import React from "react";
import { motion } from "framer-motion";
import cg from "../assets/card.png";
import mypic from "../assets/mypichalf.jpg";
import { TypeAnimation } from "react-type-animation";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
      style={{
        backgroundImage: `url(${cg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col items-center lg:flex-row gap-16 px-8 lg:px-16">
        {/* Profile Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg mb-8 lg:mb-0">
  <img
    src={mypic}
    alt="Sushant Kumar Gond"
    className="w-full h-full object-cover"
  />
</div>

        {/* About Text */}
        <motion.div
          className="text-center lg:text-left max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-2xl font-semibold text-[#16f2b3] mb-4">
            Who I Am?
          </h3>
          <TypeAnimation
            sequence={[
              "Hello! I'm Sushant Kumar Gond, a passionate and driven software engineer. I have recently completed my Bachelor's degree from Greater Noida Institute of Technology. I specialize in building scalable web applications and love solving problems with code. I enjoy exploring new technologies, particularly in the fields of web development and data structures.In my free time, I work on personal projects, take part in coding challenges, and contribute to open-source communities. With a focus on clean code and efficient solutions, I aim to bring innovation to the tech world. Let's connect and collaborate on exciting projects!",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="text-gray-300 text-lg"
            repeat={0}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
