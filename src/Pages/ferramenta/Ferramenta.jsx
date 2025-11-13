import React from 'react'
import "./Ferramenta.css"
import imgCard from "../../assets/img/IconDiscord.svg";
import Drive from "../../assets/img/drive.svg"
import Excel from "../../assets/img/excel.svg"
import Discord from "../../assets/img/IconDiscord.svg"
import Meet from "../../assets/img/meet.svg"
import Agenda from "../../assets/img/Imagens/Ferramentas/Agenda.png"
import Gmail from "../../assets/img/Imagens/Ferramentas/Gmail.png"
import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx"
// import { Botao } from "../../Components/Botao/botao";
import { Card } from "../../Components/Card/Card.jsx";
import Planilhas from '../../Components/Tools/Planilhas.jsx';

export default function Ferramentas() {
  return (
    <>
      <Header
        Gestao="Gestão"
        Home="Home"
        Curso="Curso"
        Usuario="Usuário"
      />

      <div className='main_ferramentas'>

        {/* <div className="img_ferramentas"></div> */}

        <div className='titulo_ferramentas'>
          <h2>Ferramentas</h2>
        </div>

        {/* <div className="img_ferramentas2"></div> */}


        <div className='sessao_ferramentas'>

          <Card
            Titulo="Drive"
            // Botao= "Acessar"
            imagens={Drive}
          />

          <Card
            Titulo="Planilhas"
            // Botao= "Acessar"
            imagens={Excel}
          />

          <Card
            Titulo="Documents"
            // Botao= "Acessar"

            imagens={Discord}
          />

          <Card
            Titulo="Meet"
            // Botao= "Acessar"

            imagens={Meet}
          />

          <Card
            Titulo="Agenda"
            // Botao= "Acessar"

            imagens={Agenda}
          />

          <Card
            Titulo="Gmail"
            // Botao= "Acessar"

            imagens={Gmail}
          />

        </div>

      </div>

      <Footer />

    </>
  )
}

// export default Ferramentas