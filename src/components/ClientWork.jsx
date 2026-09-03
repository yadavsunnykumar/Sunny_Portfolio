import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const clients = [
  {
    name: "Biogen",
    industry: "Pharmaceuticals",
    stack: ["Python", "FastAPI", "ReactJS", "OpenAI API"],
    points: [
      "Worked across both frontend and backend using Python (FastAPI) and ReactJS.",
      "Built a chatbot powered by the OpenAI API that summarizes FAM interactions with patients about their therapy sessions.",
      "Generates a detailed report of the conversation between the FAM and the patient.",
      "Detects PII and keeps it out of the report even when the user intentionally includes it in the conversation.",
    ],
  },
  {
    name: "Gilead",
    industry: "Pharmaceuticals",
    stack: ["Python", "Forecasting", "Data Analytics"],
    points: [
      "Developed a forecasting tool that predicts future growth from historical data.",
      "Uses past medical history and patient history data to model and project trends.",
    ],
  },
  {
    name: "Travelers",
    industry: "Insurance",
    stack: ["React", "TypeScript", "NestJS"],
    points: [
      "Worked on migrating and integrating the company's various insurance services, spanning multiple business types and housing insurance.",
      "Each business type previously had its own independent application, forcing users to re-enter their information from scratch when moving to another service.",
      "Consolidated all services into a single place, with common fields shared globally and only service-specific unique fields required per service.",
      "Contributed as both a frontend and backend developer using React, TypeScript, and NestJS.",
    ],
  },
];

function ClientWork() {
  return (
    <div>
      <SectionHeading index="02" slug="client-work" title="Client Work" />

      <div className="grid gap-6 md:grid-cols-2">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card p-6 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl border border-line-strong bg-surface-2 flex items-center justify-center flex-shrink-0">
                <Building2 size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium">{client.name}</h3>
                <p className="font-mono text-xs tracking-[0.1em] text-accent-soft mt-0.5">
                  {client.industry}
                </p>
              </div>
            </div>

            <ul className="space-y-1.5 text-sm text-muted mb-5 flex-1">
              {client.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 flex-shrink-0 font-mono">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {client.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.7rem] tracking-[0.08em] px-2.5 py-1 rounded-full border border-line text-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ClientWork;
