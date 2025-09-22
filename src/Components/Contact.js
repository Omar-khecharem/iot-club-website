// src/Components/ContactForm.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("https://formspree.io/f/xldwqnqv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        setStatus("Erreur lors de l'envoi. Réessayez.");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi. Réessayez.");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-[#060921] text-white py-16 px-4"
      data-aos="zoom-in"
    >
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-4">Contactez-nous</h2>
        <p className="text-gray-300">
          Vous avez une question ou souhaitez collaborer avec nous ? Remplissez
          ce formulaire.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-[#1b1933] p-8 rounded-xl shadow-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <input
          required
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <textarea
          name="message"
          placeholder="Votre message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-[#524dd3] rounded-lg text-white font-semibold hover:bg-blue-600 transition"
        >
          Envoyer
        </button>

        {status && <p className="mt-4 text-center text-green-400">{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
