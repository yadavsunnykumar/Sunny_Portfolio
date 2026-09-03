import React from "react";
import { motion } from "framer-motion";

function SectionHeading({ index, slug, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <span className="bracket">
        [ {index} <span className="text-faint">//</span> {slug} ]
      </span>
      <h2 className="section-title mt-4 flex items-center gap-4">
        {title}
        <span className="h-px flex-1 bg-line-strong" />
      </h2>
    </motion.div>
  );
}

export default SectionHeading;
