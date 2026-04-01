import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["profile", "experience", "skills", "projects"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-slate-50 text-gray-900"
      }`}
    >
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            darkMode ? "bg-blue-600" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute top-1/2 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse ${
            darkMode ? "bg-purple-600" : "bg-purple-300"
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute bottom-40 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10 animate-pulse ${
            darkMode ? "bg-cyan-500" : "bg-cyan-300"
          }`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/20"
              : "bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            SKY
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === id
                      ? "text-blue-400"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-blue-500/10 border border-blue-500/20"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-xl ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                darkMode
                  ? "bg-gray-900/90 backdrop-blur-md border-gray-800"
                  : "bg-white/90 backdrop-blur-md border-gray-100"
              }`}
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <section id="profile" className="min-h-screen flex flex-col justify-center pt-20">
          <Profile darkMode={darkMode} />
          <SocialLinks darkMode={darkMode} />
        </section>

        <section id="experience" className="py-24">
          <Experience darkMode={darkMode} />
        </section>

        <section id="skills" className="py-24">
          <Skills darkMode={darkMode} />
        </section>

        <section id="projects" className="py-24">
          <Projects darkMode={darkMode} />
        </section>
      </div>

      <Footer />

      {/* Back to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center text-lg font-bold"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
