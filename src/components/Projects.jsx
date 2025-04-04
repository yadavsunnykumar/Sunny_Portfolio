import React from "react";
// components/Projects.js
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { projects } from "../../constants";

function Projects({ darkMode }) {
  return (
    <div className="space-y-6 p-6">
      <h2
        className={`${
          darkMode && "text-white"
        }  text-2xl font-semibold text-gray-700 mb-6`}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-5">
                <h3
                  className={`${
                    darkMode && "text-white"
                  }  text-xl font-semibold text-gray-800`}
                >
                  {project.title}
                </h3>
                <p className={` text-gray-600 mt-2`}>{project.description}</p>
                <p className={` text-sm text-gray-500 mt-2`}>
                  Tech: {project.tech}
                </p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 mt-2"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
