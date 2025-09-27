import { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import IotFamily from "./Components/IotFamily";
import Navbar from "./Components/Navbar";
import arraow from '../src/Asstes/arrow.svg'
function App() {
  const [showButton, setShowButton] = useState(false);

  // Bloquer le clic droit
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => e.preventDefault());
  // }, []);

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App w-full bg-transparent relative">
      <Navbar />
      <div className="relative mt-36 w-full min-h-screen overflow-hidden">
        <Hero />
        <About />
        <IotFamily />
        <ContactForm />
        <Footer />
      </div>

  {showButton && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-10 right-6 flex items-center justify-center 
               
                shadow-lg 
               transition-all duration-300"
  >
    <img src={arraow} alt="arrow" className="h-14 w-14  " />
  </button>
)}

    </div>
  );
}

export default App;
