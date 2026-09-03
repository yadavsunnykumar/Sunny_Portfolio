import React from "react";
import { motion } from "framer-motion";
import {
  FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaAws, FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiFastapi, SiTensorflow,
  SiScikitlearn, SiPandas, SiNumpy, SiNestjs, SiLangchain, SiMysql, SiPostman, SiDocker,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "ReactJS", icon: FaReact },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "NestJS", icon: SiNestjs },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Pinecone", icon: FaDatabase },
    ],
  },
  {
    title: "Libraries",
    items: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "LangChain", icon: SiLangchain },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Version Control",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
];

function Skills() {
  return (
    <div>
      <SectionHeading index="03" slug="skills" title="Skills" />

      <div className="flex flex-wrap gap-6">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="card flex flex-col gap-4 flex-1 min-w-[280px] p-5"
          >
            <p className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-accent-soft">
              {category.title}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-line bg-surface text-sm text-muted transition-colors duration-200 hover:border-line-bright hover:text-ink"
                  >
                    <Icon className="text-accent-soft text-base" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
