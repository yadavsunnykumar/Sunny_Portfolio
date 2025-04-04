import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`text-center p-4 mt-10 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
      <p>&copy; {new Date().getFullYear()} Sunny Kumar Yadav. All Rights Reserved.</p>
      <p>Licensed under the MIT License.</p>
    </footer>
  );
};

export default Footer;
