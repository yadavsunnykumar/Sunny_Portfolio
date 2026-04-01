import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "TheMathCompany PVT LTD",
    role: "Product Engineer II",
    duration: "2026 - ongoing",
    desc: [
      "Working on both frontend and backend development, building scalable web applications using React, Node.js, and cloud services.",
      "Developed an AI Voice Agent using React, Node.js, and OpenAI API for the Pharma FAM application.",
      "The agent responds to natural language voice commands, performs tasks, and provides information conversationally.",
      "Leverages OpenAI's language model to generate human-like responses for customer support and virtual assistant use cases.",
    ],
  },
  {
    company: "Cognizant",
    role: "SDE 1",
    duration: "2023 - 2025",
    desc: [
      "Built scalable full-stack web applications using modern technologies in a collaborative enterprise environment.",
    ],
  },
  {
    company: "Cognizant",
    role: "Full-Stack Developer Intern",
    duration: "2021 - 2023",
    desc: [
      "Developed custom web solutions for clients across various industries, from e-commerce platforms to real-time applications.",
    ],
  },
];

function Experience({ darkMode }) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-14 flex items-center gap-3"
      >
        <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 inline-block rounded-full" />
        Experience
        <span className="flex-1 h-0.5 bg-gradient-to-r from-blue-400/20 to-transparent rounded-full" />
      </motion.h2>

      <div className="relative">
        {/* Timeline vertical line */}
        <div
          className={`absolute left-8 top-4 bottom-4 w-0.5 rounded-full ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative flex gap-6"
            >
              {/* Icon bubble */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Briefcase size={22} className="text-white" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex-1 p-5 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-900/60 border-gray-800 hover:border-blue-500/30 hover:bg-gray-900"
                    : "bg-white border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-blue-400 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium ${
                      darkMode
                        ? "bg-gray-800 text-gray-400"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Calendar size={11} />
                    {exp.duration}
                  </div>
                </div>
                <ul
                  className={`space-y-1 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.desc.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
