import React, { useState } from "react"; 
import logo from "../Asstes/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="bg-[#1b1f3a] md:w-[98%] w-[95%] fixed top-5 left-3 rounded-full z-50">
      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
        {/* Logo */}
        <a
          href="https://www.facebook.com/IOTClubIsimg"
          className="flex items-center space-x-3 rtl:space-x-reverse "
        >
          <img src={logo} className="h-16 w-16  p-2  " alt="Logo" />
          
        </a>

        <div className="flex md:order-2 space-x-3">
          {/* Bouton PC/Tablette */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeK9ubQwrFU4rf0bKCMG-xd5ucgE6fkoV5M86PYjvY6Qkuibw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <button
              type="button"
              className="text-white bg-[#524dd3] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 sm:hidden md:block"
            >
              Become a Member
            </button>
          </a>

          {/* Burger menu */}
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex absolute right-10 bottom-6 bg-[#eaeb2c] items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  hover:text-white focus:ring-2 focus:ring-gray-200 z-50"
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <svg
              className=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5  "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${open ? "block" : "hidden"} md:flex md:w-auto md:order-1`}
        >
          <ul
            className={`flex flex-col md:flex-row md:space-x-8 font-medium
              mt-2 rounded-sm md:mt-0
              bg-[#1b1933] md:bg-transparent
              p-4 md:p-0
              absolute md:static top-full left-0 md:left-auto w-full md:w-auto
              rounded-b-lg md:rounded-none
              z-50
              space-y-4 md:space-y-0
              h-auto max-h-[calc(100vh-64px)] overflow-auto`}
          >
            <li>
              <button
                className="block py-2 px-3 text-white md:text-gray-300 md:hover:text-blue-400 rounded-md w-full text-left"
                onClick={() => handleScroll("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-3 text-gray-300 hover:text-blue-400 rounded-md w-full text-left"
                onClick={() => handleScroll("about")}
              >
                À propos
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-3 text-gray-300 hover:text-blue-400 rounded-md w-full text-left"
                onClick={() => handleScroll("iot-family")}
              >
                Iot Family
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-3 text-gray-300 hover:text-blue-400 rounded-md w-full text-left"
                onClick={() => handleScroll("contact")}
              >
                Contact
              </button>
            </li>

            {/* Bouton mobile */}
            <li className="md:hidden">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeK9ubQwrFU4rf0bKCMG-xd5ucgE6fkoV5M86PYjvY6Qkuibw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full text-center text-white bg-[#524dd3] hover:bg-blue-800 font-medium rounded-3xl py-2 px-4">
                  Become a Member
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
