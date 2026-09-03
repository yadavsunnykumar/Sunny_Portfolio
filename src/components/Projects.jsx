import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Github } from "lucide-react";
import { projects } from "../../constants";
import SectionHeading from "./SectionHeading";

const INITIAL_COUNT = 3;

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <div>
      <SectionHeading index="04" slug="projects" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, index) => {
          const techList = project.tech.split(",").map((t) => t.trim());
          const hasLiveLink = !!project.liveLink;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl border border-line-strong bg-surface-2 flex items-center justify-center">
                  <Code2 size={18} className="text-accent" />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-faint hover:text-ink transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github size={17} />
                  </a>
                  {hasLiveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-faint hover:text-accent transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-base font-medium mb-3 leading-snug">
                {project.title}
              </h3>

              <ul className="space-y-1.5 mb-5 text-sm text-muted flex-1">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0 font-mono">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {techList.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-[0.68rem] tracking-[0.06em] px-2 py-0.5 rounded-full border border-line text-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-secondary font-mono !text-xs tracking-[0.12em]"
          >
            {showAll
              ? "$ collapse"
              : `$ load --more (${projects.length - INITIAL_COUNT})`}
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
