import React, { useState } from "react";
import "./carroselADM.css";
import SetaE from "../../assets/IMG/setaE.svg";
import SetaR from "../../assets/IMG/setaR.svg";
import RH from "../../assets/IMG/RH.svg"
import Marketing from "../../assets/IMG/MarketingIcon.svg"
import Financeiro from "../../assets/IMG/Financeiro.svg"
import ferramentas from "../../assets/IMG/Ferramentas.svg"
const images = [
  { src:  "https://img.freepik.com/vetores-premium/icone-de-marketing-circular_1453-93.jpg", alt: "Google Meet" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtVHnHpj70bkodmpgf1O-53TQ7P-6GHpRWg&s", alt: "Google Docs" },
  { src: "https://cdn-icons-png.flaticon.com/512/1924/1924289.png", alt: "Google Calendar" },
  { src: "https://cdn-icons-png.flaticon.com/512/1241/1241538.png", alt: "Microsoft Teams" },
  { src: "https://cdn-icons-png.flaticon.com/512/1466/1466339.png", alt: "Outlook" },
  { src: "https://static.vecteezy.com/ti/vetor-gratis/p1/14393162-design-de-icone-de-administracao-gratis-vetor.jpg", alt: "Google Calendar" },
];

export default function CarouselADM() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const itemsPerPage = 4;

  const nextSlide = () => {
    // Só avança se não estiver no fim
    if (current + itemsPerPage < images.length) {
      setDirection("next");
      setCurrent((prev) => prev + itemsPerPage);
    }
  };

  const prevSlide = () => {
    // Só volta se não estiver no início
    if (current > 0) {
      setDirection("prev");
      setCurrent((prev) => prev - itemsPerPage);
    }
  };

  const visibleImages = images.slice(current, current + itemsPerPage);

  return (
    <div className="carousel-container">
      <button
        className="arrow left"
        onClick={prevSlide}
        disabled={current === 0}
      >
        <img src={SetaE} alt="Seta esquerda" className="seta-img" />
      </button>

      <div className={`carousel slide-${direction}`}>
        {visibleImages.map((img, index) => (
          <div className="slide active" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <button
        className="arrow right"
        onClick={nextSlide}
        disabled={current + itemsPerPage >= images.length}
      >
        <img src={SetaR} alt="Seta direita" className="seta-img" />
      </button>
    </div>
  );
}
