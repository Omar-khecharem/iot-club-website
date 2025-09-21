
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b1933] text-gray-300 py-6 flex flex-col items-center space-y-3">
      
      {/* Réseaux sociaux */}
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://www.facebook.com/IOTClubIsimg/"
         
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/iot_club_isimg/"

          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Texte */}
      <p className="text-sm">
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

      <p className="text-xs text-gray-400 text-center">
        All rights reserved. Designed and developed with ❤️ by Omar Khecharem.
      </p>
    </footer>
  );
};

export default Footer;
