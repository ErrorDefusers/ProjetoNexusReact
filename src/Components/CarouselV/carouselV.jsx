import React, { useState } from "react";
import "./CarouselV.css";
import SetaE from "../../assets/IMG/setaE.svg";
import SetaR from "../../assets/IMG/setaR.svg";

const images = [
  { src: "https://play-lh.googleusercontent.com/1ckxjos_oOGSNOFyUE-cp7xSCoKLVgMOEAGVCgb6WDhObTlDDnyLohgtI8o1TI2c7A", alt: "Google Meet" },
  { src: "https://cdn-1.webcatalog.io/catalog/google-docs/google-docs-icon-filled-256.png?v=1757896981588", alt: "Google Docs" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iWLxGM9Bm56eCWoer-WUP7O9PnAq7a1ubw&s", alt: "Google Calendar" },
  { src: "https://static.vecteezy.com/system/resources/previews/017/395/378/non_2x/google-drive-icons-free-png.png", alt: "Microsoft Teams" },
  { src: "https://img.freepik.com/psd-premium/logotipo-do-youtube-retangulo-vermelho-com-botao-play-branco_1131634-290.jpg?semt=ais_hybrid&w=740&q=80", alt: "Outlook" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg", alt: "Google Calendar" },
];

export default function CarouselV() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (current + itemsPerPage < images.length) {
      setDirection("down");
      setCurrent((prev) => prev + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setDirection("up");
      setCurrent((prev) => prev - itemsPerPage);
    }
  };

  const visibleImages = images.slice(current, current + itemsPerPage);

  return (
    <div className="carousel-container-vertical">
      {/* Seta para cima */}
      <button className="arrow up" onClick={prevSlide} disabled={current === 0}>
        <img src={SetaE} alt="Seta para cima" className="seta-img seta-up" />
      </button>

      {/* Itens do carrossel */}
      <div className={`carousel-vertical slide-${direction}`}>
        {visibleImages.map((img, index) => (
          <div className="slide-vertical active" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Seta para baixo */}
      <button
        className="arrow down"
        onClick={nextSlide}
        disabled={current + itemsPerPage >= images.length}
      >
        <img src={SetaR} alt="Seta para baixo" className="seta-img seta-down" />
      </button>
    </div>
  );
}