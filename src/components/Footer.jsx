import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-line mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-[0.1em] text-faint">
          <span className="text-accent">~/</span>sunny-kumar-yadav —{" "}
          {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs tracking-[0.1em] text-faint">
          built with React · Tailwind · framer-motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
