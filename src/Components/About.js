// src/Components/About.jsx
import React from "react";

// Exemple d’images (remplace par les vraies)
import presidentImg from "../Asstes/president.jpg";
import rhImg from "../Asstes/rh.jpg";
import marketingImg from "../Asstes/marketing.jpg";
import financeImg from "../Asstes/finance.jpg";
import secretaireImg from "../Asstes/secretaire.jpg";
import iaImg from "../Asstes/ia.jpg";
import devWebImg from "../Asstes/devweb.jpg";
import MobileImg from "../Asstes/devmobile.jpg";

const teamMembers = [
  {
    role: "Président",
    name: "Hadil Hammami",
    img: presidentImg,
    description:
      "Supervise toutes les activités du club, prend les décisions stratégiques et guide les différents départements.",
  },
    {
    role: "Secrétaire générale",
    name: "Essya marweni",
    img: secretaireImg,
    description:
      "Organise les réunions, rédige les comptes rendus et assure le suivi administratif du club.",
  },
    {
    role: "Finance",
    name: "Seif El Islam El Anes",
    img: financeImg,
    description:
      "Gère le budget, les financements et les ressources financières pour les projets du club.",
  },
    {
    role: "Marketing",
    name: "Chema mahfoudh",
    img: marketingImg,
    description:
      "Développe la communication, la promotion et la visibilité du club à travers les réseaux et événements.",
  },

  {
    role: "RH",
    name: "Omar khecharem",
    img: rhImg,
    description:
      "Gère le recrutement, la formation et le suivi des membres du club pour assurer une équipe performante.",
  },


 
  {
    role: "IA",
    name: "Rabie Houssaini",
    img: iaImg,
    description:
      "Spécialisé en intelligence artificielle, il encadre des formations sur le machine learning, le deep learning et l’innovation technologique au sein du club.",
  },
  {
    role: "Dev Web",
    name: "Chamseddine Nacer",
    img: devWebImg,
    description:
      "Passionné par le développement web, il anime des ateliers pratiques en HTML, CSS, JavaScript et frameworks modernes pour les membres du club.",
  },
  {
    role: "Dev Mobile",
    name: "Mohamed Amine Ben Nssir",
    img: MobileImg,
    description:
      "Expert en développement mobile, il propose des formations sur la création d’applications Android et iOS, allant de la conception à la mise en production.",
  },


];

const About = () => {
  return (
    <section id="about" className="bg-[#060921] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Notre Équipe & Départements</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Découvrez les rôles et responsabilités de chaque département du club IOT ISIMG.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1b1933] rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.img}
              alt={member.role}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{member.role}</h3>
            <p className="text-gray-300 text-center mt-2 mb-2 font-medium">{member.name}</p>
            <p className="text-gray-400 text-sm text-center">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
