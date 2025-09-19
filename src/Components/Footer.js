// src/Components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1b1933] text-gray-300 py-6 flex flex-col items-center">
      <p className="text-sm mb-1">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/omar-khecharem-373b16241/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Omar Khecharem
        </a>
      </p>
      <p className="text-xs text-gray-400">
        All rights reserved. Designed and developed with ❤️ by Omar Khecharem.
      </p>
    </footer>
  );
};

export default Footer;
