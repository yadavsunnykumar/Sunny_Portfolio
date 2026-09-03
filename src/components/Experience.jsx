import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

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

function Experience() {
  return (
    <div>
      <SectionHeading index="01" slug="experience" title="Experience" />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line-strong" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border border-accent bg-black">
                <span className="absolute inset-1 rounded-full bg-accent" />
              </span>

              <div className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-medium">{exp.role}</h3>
                    <p className="font-mono text-xs tracking-[0.1em] text-accent-soft mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.1em] px-2.5 py-1 rounded-full border border-line text-faint">
                    <Calendar size={11} />
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-muted">
                  {exp.desc.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0 font-mono">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
