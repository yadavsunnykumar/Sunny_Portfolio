import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t mt-20 py-8 ${
        darkMode ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sunny Kumar Yadav. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
