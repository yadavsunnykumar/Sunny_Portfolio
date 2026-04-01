import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/yadavsunnykumar",
    hoverClass: "hover:border-gray-400 hover:text-white",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sunny-yadav-56b783206/",
    hoverClass: "hover:border-blue-400 hover:text-blue-400",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:sunny9811273802@gmail.com",
    hoverClass: "hover:border-red-400 hover:text-red-400",
  },
];

function SocialLinks({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-wrap items-center gap-3 mt-10"
    >
      {links.map(({ icon: Icon, label, href, hoverClass }, index) => (
        <motion.a
          key={index}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
            darkMode
              ? `bg-gray-900/60 border-gray-800 text-gray-400 ${hoverClass}`
              : `bg-white border-gray-200 text-gray-600 shadow-sm hover:shadow-md ${hoverClass}`
          }`}
        >
          <Icon size={16} />
          {label}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SocialLinks;
