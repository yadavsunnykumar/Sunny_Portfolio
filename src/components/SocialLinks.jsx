import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  {
    icon: FaGithub,
    label: "github",
    href: "https://github.com/yadavsunnykumar",
  },
  {
    icon: FaLinkedin,
    label: "linkedin",
    href: "https://www.linkedin.com/in/sunny-yadav-56b783206/",
  },
  {
    icon: FaEnvelope,
    label: "email",
    href: "mailto:sunny9811273802@gmail.com",
  },
];

function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75 }}
      className="flex flex-wrap items-center gap-3 mt-12"
    >
      {links.map(({ icon: Icon, label, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="btn btn-secondary font-mono !text-xs tracking-[0.12em]"
        >
          <Icon size={15} />
          {label}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SocialLinks;
