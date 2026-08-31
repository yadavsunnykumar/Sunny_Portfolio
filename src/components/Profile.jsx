import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Profile({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      {/* Profile image with animated ring */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex-shrink-0"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-40 scale-110" />
        {/* Image */}
        <div className="relative w-48 h-48 rounded-full border-4 border-blue-500/40 overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Sunny Kumar Yadav"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Rotating dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-400/30"
        />
      </motion.div>

      {/* Text content */}
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 font-medium mb-2 tracking-wide"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
        >
          Sunny Kumar{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Yadav
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-medium mb-6"
        >
          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
            I'm a{" "}
          </span>
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "MERN Stack Engineer",
              2000,
              "Full-Stack Developer",
              2000,
              "React Specialist",
              2000,
            ]}
            repeat={Infinity}
            className="text-blue-400 font-semibold"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`max-w-lg leading-relaxed mb-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Passionate full-stack developer crafting modern web experiences with
          the MERN stack. Currently working at TheMathCompany, building
          scalable AI-powered applications that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className={`px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
              darkMode
                ? "border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-white"
                : "border-gray-200 text-gray-700 hover:border-blue-400 hover:text-gray-900"
            }`}
          >
            My Experience
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Profile;
