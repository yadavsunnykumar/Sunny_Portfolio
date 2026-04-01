import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Github } from "lucide-react";
import { projects } from "../../constants";

const techColors = {
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  TypeScript: "bg-blue-600/10 text-blue-400 border-blue-600/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  Express: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  MongoDB: "bg-green-700/10 text-green-500 border-green-700/20",
  "Socket.IO": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  FastAPI: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Next.js": "bg-slate-500/10 text-slate-300 border-slate-500/20",
  Nextjs: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  Convex: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Clerk.dev": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  TailwindCSS: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "shadcn/ui": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Gemini AI": "bg-blue-400/10 text-blue-300 border-blue-400/20",
  Vapi: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Flask: "bg-gray-600/10 text-gray-300 border-gray-600/20",
  SQLite: "bg-cyan-700/10 text-cyan-500 border-cyan-700/20",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  JavaScript: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  "Spring Boot": "bg-green-600/10 text-green-400 border-green-600/20",
  Java: "bg-red-500/10 text-red-400 border-red-500/20",
  MySQL: "bg-blue-700/10 text-blue-400 border-blue-700/20",
  "Spring Security": "bg-green-700/10 text-green-500 border-green-700/20",
  Thymeleaf: "bg-lime-600/10 text-lime-400 border-lime-600/20",
  Bootstrap: "bg-purple-600/10 text-purple-400 border-purple-600/20",
};

const INITIAL_COUNT = 3;

function Projects({ darkMode }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-14 flex items-center gap-3"
      >
        <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 inline-block rounded-full" />
        Projects
        <span className="flex-1 h-0.5 bg-gradient-to-r from-blue-400/20 to-transparent rounded-full" />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, index) => {
          const techList = project.tech.split(",").map((t) => t.trim());
          const hasLiveLink = !!project.liveLink;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col ${
                darkMode
                  ? "bg-gray-900/60 border-gray-800 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
                  : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              }`}
            >
              {/* Animated top border on hover */}
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <Code2 size={20} className="text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode
                          ? "text-gray-500 hover:text-gray-200"
                          : "text-gray-400 hover:text-gray-700"
                      }`}
                    >
                      <Github size={18} />
                    </motion.a>
                    {hasLiveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode
                            ? "text-gray-500 hover:text-blue-400"
                            : "text-gray-400 hover:text-blue-500"
                        }`}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>

                {/* Feature bullets */}
                <ul
                  className={`space-y-1.5 mb-5 text-sm flex-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {techList.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${
                        techColors[tech] ||
                        "bg-gray-500/10 text-gray-400 border-gray-500/20"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
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
          {showAll ? "Show Less ↑" : `Load More (${projects.length - INITIAL_COUNT} more) ↓`}
        </motion.button>
      </div>
    </div>
  );
}

export default Projects;
