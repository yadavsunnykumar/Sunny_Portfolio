import React from "react";

function Experience({darkMode}) {
  const experiences = [
    { company: "Cognizant", role: "SDE 1", duration: "2023 - Present" },
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      duration: "2021 - 2023",
    },
  ];
  return (
    <div className="mb-10">
      <h2 className={`${darkMode && "text-white"}  text-2xl font-semibold text-gray-700 mb-4`}>Experience</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className={`${darkMode && "bg-white"}   p-4 rounded-lg shadow-md`}>
            <h3 className="text-lg font-semibold text-gray-800">
              {exp.role} at {exp.company}
            </h3>
            <p className="text-gray-600">{exp.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
