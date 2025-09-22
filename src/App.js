import { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import IotFamily from "./Components/IotFamily";
import Navbar from "./Components/Navbar";


function App() {
 document.addEventListener('contextmenu',(e)=>{
  e.preventDefault();
 })
  return (
    <div className="App w-full bg-transparent">
      <Navbar />
      <div className="relative mt-36 w-full min-h-screen overflow-hidden">
        <Hero />
        <About />
        <IotFamily />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
