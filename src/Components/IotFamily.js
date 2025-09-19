// src/Components/IotFamily.jsx
import React, { useState } from "react";

// Exemple d'images avec l'année correspondante
import img1 from "../Asstes/2021/family2021_1.jpg";
import img2 from "../Asstes/2021/family2021_2.jpg";
import img3 from "../Asstes/2021/family2021_3.jpg";
import img4 from "../Asstes/2021/family2021_4.jpg";
import img5 from "../Asstes/2021/family2021_5.jpg";


import img6 from "../Asstes/2022/family2022_1.jpg";
import img7 from "../Asstes/2022/family2022_2.jpg";
import img8 from "../Asstes/2022/family2022_3.jpg";

import img9 from "../Asstes/2024/family2023_1.jpg";
import img10 from "../Asstes/2024/family2023_2.jpg";
import img11 from "../Asstes/2024/family2023_3.jpg";
import img12 from "../Asstes/2024/family2023_4.jpg";
import img13 from "../Asstes/2024/family2023_5.jpg";
import img14 from "../Asstes/2024/family2023_6.jpg";
import img15 from "../Asstes/2024/family2023_7.jpg";
import img16 from "../Asstes/2024/family2023_8.jpg";


import img18 from "../Asstes/2025/family2025_1.jpg";
import img19 from "../Asstes/2025/family2025_2.jpg";
import img20 from "../Asstes/2025/family2025_3.jpg";
import img21 from "../Asstes/2025/family2025_4.jpg";
import img22 from "../Asstes/2025/family2025_5.jpg";



const galleryImages = [
  { src: img1, year: 2021 },
  { src: img2, year: 2021 },
  { src: img3, year: 2021 },
  { src: img4, year: 2021 },
  { src: img5, year: 2021 },
  { src: img6, year: 2022 },
  { src: img7, year: 2022 },
  { src: img9, year: 2024 },
  { src: img8, year: 2024 },
  { src: img10, year: 2024 },
  { src: img11, year: 2024},
  { src: img12, year: 2024 },
  { src: img13, year: 2024 },
  { src: img14, year: 2024 },
  { src: img15, year: 2024 },
  { src: img16, year: 2024 },
  { src: img18, year: 2025 },
  { src: img19, year: 2025 },
  { src: img20, year: 2025 },
  { src: img21, year: 2025 },
  { src: img22, year: 2025 },

];

const years = [2021, 2022, 2024, 2025];

const IotFamily = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.year === filter);

  const imagesToShow = showAll ? filteredImages : filteredImages.slice(0, 8);

  return (
    <section id="iot-family" className="bg-[#0d0f32] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-4">IOT Family</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Retour sur nos activités passées et nos anciens membres qui ont
          contribué au succès du club.
        </p>
      </div>

      {/* Boutons de filtre */}
      <div className="flex justify-center mb-12 flex-wrap gap-4">
        <button
          className={`px-4 py-2 rounded-full font-semibold ${
            filter === "all"
              ? "bg-blue-700 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-blue-600"
          }`}
          onClick={() => {
            setFilter("all");
            setShowAll(false);
          }}
        >
          Tous
        </button>
        {years.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === year
                ? "bg-blue-700 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-blue-600"
            }`}
            onClick={() => {
              setFilter(year);
              setShowAll(false);
            }}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imagesToShow.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img.src}
              alt={`IOT Family ${img.year}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bouton Voir plus */}
      {!showAll && filteredImages.length > 8 && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-[#524dd3] text-white rounded-full hover:bg-blue-600 transition"
            onClick={() => setShowAll(true)}
          >
            Voir plus
          </button>
        </div>
      )}
    </section>
  );
};

export default IotFamily;