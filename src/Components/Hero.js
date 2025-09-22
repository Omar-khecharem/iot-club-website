import React, { useEffect, useRef, useCallback } from "react";
import VanillaTilt from "vanilla-tilt";
import logo from "../Asstes/logo.png";
import CountUp from "react-countup";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ReactTyped as Typed } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const logoRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stats = [
    { end: 4, label: "Années d'expérience" },
    { end: 50, label: "Workshop réalisés" },
    { end: 150, label: "Membres du club" },
  ];

  useEffect(() => {
    if (logoRef.current) {
      VanillaTilt.init(logoRef.current, {
        max: 25,
        speed: 200,
        glare: true,
        "max-glare": 0.4,
      });
    }
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Charge tous les modules nécessaires
  }, []);

  return (
    <div className="relative w-full min-h-screen md:flex md:justify-center  " id="home">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#07081e" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1.5, outModes: "bounce" },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Contenu */}
      <section className="relative max-w-1/2 z-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 w-full">
          <div
            className="flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl lg:text-6xl text-white relative">
              <Typed
                strings={[
                  "IOT ISIMG",
                  "Rejoignez notre communauté !",
                  "Innovation & Technologie",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
                smartBackspace={true}
                className="text-white text-center
      before:absolute before:inset-0 before:blur-[12px] 
      before:content-[''] 
      animate-pulse-neon"
              />
            </h1>

            <div className="p-4 max-w-full mx-auto">
              {/* Intro */}
              <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-4">
                Le Club IoT, actif depuis 4 ans, regroupe 4 départements :
              </p>

              {/* Cartes */}
              <div className="flex flex-col space-y-4">
                {[
                  {
                    title: "IoT",
                    desc: "Formations et projets innovants pour les passionnés d’IoT.",
                  },
                  {
                    title: "Développement Web",
                    desc: "Front-end, back-end et frameworks modernes.",
                  },
                  {
                    title: "Développement Mobile",
                    desc: "Création d’applications natives et cross-platform.",
                  },
                  {
                    title: "Intelligence Artificielle",
                    desc: "Projets en machine learning et deep learning.",
                  },
                ].map((dept, i) => (
                  <div
                    key={i}
                    className="backdrop-blur-sm relative p-5 rounded-xl bg-gradient-to-r shadow-md border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:brightness-110"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay={i * 100}
                  >
                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                      {dept.title}
                    </h3>
                    <p
                      className={`text-gray-100 text-sm sm:text-base md:text-lg mt-1`}
                    >
                      {dept.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <p className="mt-6 text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                Nous offrons des formations, participons à des hackathons et
                organisons des compétitions afin de développer les compétences
                et encourager l’innovation.
              </p>
            </div>

            <div className="flex md:flex-row flex-col items-center justify-center gap-4 w-full px-4">
              {/* Bouton principal */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFkpKHAyWp27IHeTO3uXDSzW4w9IeZ7JEtfrushr4kTpBquQ/viewform"
                className="w-full md:w-auto text-center py-3 px-5 font-bold text-white rounded-3xl
             bg-[#524dd3]
               hover:scale-105 active:scale-95
               transition-transform duration-200"
              >
                Become a Member
              </a>

              {/* Bouton secondaire */}
              <a
                href="#about"
                className="w-full md:w-auto text-center py-3 px-5 font-bold text-[#524dd3] bg-white
               rounded-3xl border-2 border-[#524dd3]
               shadow-md hover:bg-[#524dd3] hover:text-white
               transition-all duration-200"
              >
                Learn more
              </a>
            </div>

            {/* Counters */}
            <div className="w-full py-16 flex flex-col sm:flex-row justify-center items-center sm:space-x-12 space-y-4 sm:space-y-0">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-5xl font-bold text-white">
                    <CountUp 
                    end={stat.end} 
                    duration={3} 
                    enableScrollSpy={true}
                     scrollSpyOnce={false}  
                    />
                    {index > 0n && <span>+</span>}
                  </span>
                  <span className="text-gray-300 mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <img
            ref={logoRef}
            src={logo}
            alt="Logo"
            className="flex-1 m-auto sm:h-96 sm:w-96 rounded-lg shadow-lg 
             hidden sm:block " // Desktop (VanillaTilt) 
            data-aos="fade-down"
            data-aos-duration="1000"
          />

          {/* Version mobile avec rotation auto */}
          <img
            src={logo}
            alt="Logo"
            className="block sm:hidden m-auto h-72 w-72 rounded-lg shadow-lg mobile-rotate"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
