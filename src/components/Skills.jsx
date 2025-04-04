import React from "react";


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-3xl" /> },
];

function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-3">
            {skill.icon}
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


  export default Skills;