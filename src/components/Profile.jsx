import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Magnetic from "./Magnetic";

const ease = [0.22, 1, 0.36, 1];

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16"
    >
      {/* Portrait */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="relative flex-shrink-0"
      >
        <div className="absolute -inset-4 rounded-2xl bg-accent/15 blur-2xl" />
        <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl border border-line-bright overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Sunny Kumar Yadav"
            className="w-full h-full object-cover grayscale-[0.35] contrast-105"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
        </div>
        {/* corner ticks */}
        <span className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-accent" />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-accent" />
      </motion.div>

      {/* Copy */}
      <div className="min-w-0">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bracket"
        >
          $ whoami
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, ease }}
          className="mt-4 text-5xl md:text-6xl font-medium leading-[1.02]"
        >
          Sunny Kumar <span className="text-accent-soft">Yadav</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 text-lg md:text-xl font-mono text-muted"
        >
          <span className="text-faint">&gt;&nbsp;</span>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "AI Application Engineer",
              2000,
              "React + FastAPI",
              2000,
              "Backend + Frontend",
              2000,
            ]}
            repeat={Infinity}
            className="text-accent"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-xl leading-relaxed text-muted"
        >
          Full-stack developer building AI-powered products across frontend and
          backend. Currently at TheMathCompany, shipping scalable applications
          with React, FastAPI and NestJS for pharma and insurance clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Magnetic strength={8}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
          </Magnetic>
          <Magnetic strength={8}>
            <a href="#experience" className="btn btn-secondary">
              My Experience
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Profile;
