import React, { useState } from "react";
import { Sun, Moon, Home } from "lucide-react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 bg-opacity-90 shadow-md p-4 flex items-center justify-between ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"} z-50 px-6`}>
        {/* Home Icon */}
        <a href="#" className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <Home size={24} />
        </a>
        
        
        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg font-medium">
          <a href="#profile" className="hover:text-blue-400">Profile</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
        </div>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg shadow-md bg-blue-500 text-white hover:bg-blue-600"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
      
      <div className="pt-24 p-10 space-y-10"> {/* Increased top padding for more space */}
        <div id="profile" className="flex flex-col items-center space-y-10"> {/* Increased space between elements */}
         
          <Profile imageSize="w-100 h-110" /> {/* Increased profile image size */}
        </div>
        
        <div id="social" className="space-y-10">
          <SocialLinks darkMode={darkMode} />
        </div>
        
        <div id="experience" className={`p-6 rounded-lg shadow-md space-y-10 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
          <Experience darkMode ={darkMode}/>
        </div>
        
        <div id="skills" className={`p-6 rounded-lg shadow-md space-y-10 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
          <Skills />
        </div>
        
        <div id="projects" className="space-y-10">
          <Projects darkMode={darkMode} />
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}
export default App;