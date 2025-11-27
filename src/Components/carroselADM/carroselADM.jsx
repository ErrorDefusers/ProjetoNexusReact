// import React, { useState } from "react";
// import "./carroselADM.css";
// import SetaE from "../../assets/IMG/setaE.svg";
// import SetaR from "../../assets/IMG/setaR.svg";

// const items = [
//   "Recursos Humanos",
//   "Desenvolvimento de software",
//   "Computação em nuvem",
//   "Desenvolvimento de jogos",
//   "Suporte técnico",
//   "Administração de banco de dados",
//   "Análise de sistemas"
// ];

// export default function CarroselADM({ onSelectSetor }) {
//   const [index, setIndex] = useState(0);

//   const nextItem = () => {
//     setIndex((prev) => (prev + 1) % items.length);
//   };

//   const prevItem = () => {
//     setIndex((prev) => (prev - 1 + items.length) % items.length);
//   };

//   const selectItem = (i) => {
//     setIndex(i);
//     if (onSelectSetor) onSelectSetor(items[i]);
//   };

//   return (
//     <div className="Setores">
//       <div className="carrossel-container">
//         <button className="seta-btn" onClick={prevItem}>
//           <img src={SetaE} alt="Voltar" className="seta-img" />
//         </button>

//         {/* Clique no card dispara filtro */}
//         <div
//           className="carrossel-card"
//           onClick={() => onSelectSetor(items[index])}
//         >
//           <h2>{items[index]}</h2>
//         </div>

//         <button className="seta-btn" onClick={nextItem}>
//           <img src={SetaR} alt="Avançar" className="seta-img" />
//         </button>
//       </div>

//       {/* Bolinhas */}
//       <div className="carrossel-indicadores">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             className={`bolinha ${i === index ? "ativa" : ""}`}
//             onClick={() => selectItem(i)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "./carroselADM.css";
import SetaE from "../../assets/IMG/setaE.svg";
import SetaR from "../../assets/IMG/setaR.svg";

// Lista de setores deve bater exatamente com f.setor.nome da API
const items = [
  "Recursos Humanos",
  "Desenvolvimento de software",
  "Computação em nuvem",
  "Desenvolvimento de jogos",
  "Suporte técnico",
  "Administração de banco de dados",
  "Análise de sistemas"
];

export default function CarroselADM({ onSelectSetor }) {
  const [index, setIndex] = useState(0);

  const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  // Quando o card for clicado, envia o setor para o HomeAdm
  const handleClickCard = () => {
    if (onSelectSetor) onSelectSetor(items[index]);
  };

  // Quando a bolinha for clicada, muda o índice e envia setor
  const handleClickBolinha = (i) => {
    setIndex(i);
    if (onSelectSetor) onSelectSetor(items[i]);
  };

  return (
    <div className="Setores">
      <div className="carrossel-container">
        <button className="seta-btn" onClick={prevItem}>
          <img src={SetaE} alt="Voltar" className="seta-img" />
        </button>

        <div className="carrossel-card" onClick={handleClickCard}>
          <h2>{items[index]}</h2>
        </div>

        <button className="seta-btn" onClick={nextItem}>
          <img src={SetaR} alt="Avançar" className="seta-img" />
        </button>
      </div>

      <div className="carrossel-indicadores">
        {items.map((_, i) => (
          <div
            key={i}
            className={`bolinha ${i === index ? "ativa" : ""}`}
            onClick={() => handleClickBolinha(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

