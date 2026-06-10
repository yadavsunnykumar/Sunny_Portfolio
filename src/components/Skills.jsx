import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaDatabase, FaPython, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb,
  SiFastapi, SiNestjs, SiLangchain, SiTensorflow, SiScikitlearn,
  SiPandas, SiNumpy, SiPostman, SiDocker,
} from "react-icons/si";

const skills = [
  { name: "Python",       icon: FaPython,       color: "text-yellow-300", bg: "bg-yellow-300/10 border-yellow-300/20", level: 90 },
  { name: "JavaScript",   icon: FaJs,           color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20", level: 88 },
  { name: "ReactJS",      icon: FaReact,        color: "text-cyan-400",   bg: "bg-cyan-400/10 border-cyan-400/20",     level: 92 },
  { name: "FastAPI",      icon: SiFastapi,      color: "text-teal-400",   bg: "bg-teal-400/10 border-teal-400/20",     level: 85 },
  { name: "LangChain",    icon: SiLangchain,    color: "text-green-400",  bg: "bg-green-400/10 border-green-400/20",   level: 80 },
  { name: "Next.js",      icon: SiNextdotjs,    color: "text-gray-300",   bg: "bg-gray-400/10 border-gray-400/20",     level: 82 },
  { name: "NestJS",       icon: SiNestjs,       color: "text-red-400",    bg: "bg-red-400/10 border-red-400/20",       level: 75 },
  { name: "Tailwind",     icon: SiTailwindcss,  color: "text-sky-400",    bg: "bg-sky-400/10 border-sky-400/20",       level: 88 },
  { name: "TensorFlow",   icon: SiTensorflow,   color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20", level: 68 },
  { name: "Scikit-learn", icon: SiScikitlearn,  color: "text-orange-300", bg: "bg-orange-300/10 border-orange-300/20", level: 72 },
  { name: "Pandas",       icon: SiPandas,       color: "text-blue-400",   bg: "bg-blue-400/10 border-blue-400/20",     level: 78 },
  { name: "NumPy",        icon: SiNumpy,        color: "text-blue-300",   bg: "bg-blue-300/10 border-blue-300/20",     level: 78 },
  { name: "PostgreSQL",   icon: SiPostgresql,   color: "text-sky-400",    bg: "bg-sky-400/10 border-sky-400/20",       level: 78 },
  { name: "MongoDB",      icon: SiMongodb,      color: "text-green-500",  bg: "bg-green-500/10 border-green-500/20",   level: 80 },
  { name: "MySQL",        icon: SiMysql,        color: "text-blue-400",   bg: "bg-blue-400/10 border-blue-400/20",     level: 75 },
  { name: "Pinecone",     icon: FaDatabase,     color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", level: 70 },
  { name: "Docker",       icon: SiDocker,       color: "text-blue-500",   bg: "bg-blue-500/10 border-blue-500/20",     level: 72 },
  { name: "AWS",          icon: FaAws,          color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20", level: 68 },
  { name: "Git & GitHub", icon: FaGithub,       color: "text-gray-300",   bg: "bg-gray-400/10 border-gray-400/20",     level: 90 },
  { name: "Postman",      icon: SiPostman,      color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20", level: 82 },
];

const INITIAL_COUNT = 8;

function Skills({ darkMode }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? skills : skills.slice(0, INITIAL_COUNT);

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-14 flex items-center gap-3"
      >
        <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 inline-block rounded-full" />
        Skills
        <span className="flex-1 h-0.5 bg-gradient-to-r from-blue-400/20 to-transparent rounded-full" />
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {visible.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-default ${
                darkMode
                  ? "bg-gray-900/60 border-gray-800 hover:border-gray-600"
                  : "bg-white border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${skill.bg}`}>
                <Icon className={`${skill.color} text-xl`} />
              </div>
              <p className="font-medium text-xs mb-2">{skill.name}</p>

              <div className={`h-1 rounded-full overflow-hidden ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3, duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
              <p className={`text-xs mt-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {skill.level}%
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className={`px-6 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
            darkMode
              ? "border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-white"
              : "border-gray-200 text-gray-600 hover:border-blue-400 hover:text-gray-900"
          }`}
        >
          {showAll ? "Show Less ↑" : `Load More (${skills.length - INITIAL_COUNT} more) ↓`}
        </motion.button>
      </div>
    </div>
  );
}

export default Skills;
