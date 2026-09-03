import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import ClientWork from "./components/ClientWork";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import NeuralBackdrop from "./components/NeuralBackdrop";
import Magnetic from "./components/Magnetic";

const navLinks = [
  { href: "#profile", label: "whoami" },
  { href: "#experience", label: "experience" },
  { href: "#clients", label: "client-work" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

function getInitialTheme() {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }
  return "dark";
}

function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor spotlight: track the pointer over the nearest .card
  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    let last = null;
    const apply = () => {
      raf = 0;
      if (!last) return;
      const card =
        last.target instanceof Element ? last.target.closest(".card") : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${last.clientX - r.left}px`);
      card.style.setProperty("--my", `${last.clientY - r.top}px`);
    };
    const onMove = (e) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-ink">
      <div className="dot-grid" />

      {/* Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "surface-blur border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#profile"
            className="font-mono text-sm font-medium tracking-[0.14em] text-ink"
          >
            <span className="text-accent">~/</span>sky
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, label }) => {
              const id = href.slice(1);
              const active = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`font-mono text-xs tracking-[0.12em] transition-colors duration-200 ${
                    active ? "text-accent" : "text-faint hover:text-ink"
                  }`}
                >
                  {active ? "> " : ""}
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={5}>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-line text-muted hover:text-ink hover:border-line-bright transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </Magnetic>

            <button
              className="md:hidden p-2 text-muted"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden surface-blur border-t border-line overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-xs tracking-[0.12em] text-faint hover:text-ink py-2"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <section
          id="profile"
          className="relative min-h-screen flex flex-col justify-center pt-28 pb-20"
        >
          <NeuralBackdrop />
          <div className="relative z-10">
            <Profile />
            <SocialLinks />
          </div>
        </section>

        <section id="experience" className="py-24 md:py-32">
          <Experience />
        </section>

        <section id="clients" className="py-24 md:py-32">
          <ClientWork />
        </section>

        <section id="skills" className="py-24 md:py-32">
          <Skills />
        </section>

        <section id="projects" className="py-24 md:py-32">
          <Projects />
        </section>
      </div>

      <Footer />

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full border border-line-strong surface-blur text-accent flex items-center justify-center font-mono hover:border-line-bright transition-colors"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
