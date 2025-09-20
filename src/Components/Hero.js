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
    <div className="relative w-full min-h-screen " id="home">
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
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              <Typed
                strings={[
                  "IOT ISIMG",
                  "Join Our Community!",
                  "Innovation & Tech",
                ]}
                typeSpeed={100} // vitesse de frappe
                backSpeed={50} // vitesse de suppression
                loop // boucle infinie
              />
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl">
              Le Club IoT, actif depuis 4 ans, regroupe 4 départements : IoT,
              Développement Web, Développement Mobile et Intelligence
              Artificielle. Nous offrons des formations, participons à des
              hackathons et organisons des compétitions afin de développer les
              compétences et encourager l’innovation.
            </p>
            <div className="flex md:flex-row flex-col items-center justify-center gap-5">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFkpKHAyWp27IHeTO3uXDSzW4w9IeZ7JEtfrushr4kTpBquQ/viewform"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white rounded-3xl bg-[#524dd3] hover:bg-blue-800"
              >
                Become a Member
              </a>
              <a
                href="#about"
                className="py-3 px-5 sm:ms-4 text-sm font-bold text-[#524dd3] bg-white rounded-3xl border-4 border-[#524dd3] hover:bg-gray-100 hover:text-blue-700"
              >
                Learn more
              </a>
            </div>

            {/* Counters */}
            <div className="w-full py-16 flex flex-col sm:flex-row justify-center items-center sm:space-x-12 space-y-8 sm:space-y-0">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-5xl font-bold text-white">
                    <CountUp end={stat.end} duration={3} />
                    {index > 0n&&<span>+</span>}
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
             hidden sm:block" // Desktop (VanillaTilt)
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
