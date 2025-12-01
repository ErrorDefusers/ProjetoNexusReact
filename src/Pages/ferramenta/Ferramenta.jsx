import React from 'react'
import "./Ferramenta.css"
import imgCard from "../../assets/img/IconDiscord.svg";
import Drive from "../../assets/img/drive.svg"
import Excel from "../../assets/img/Grist.webp"
import Discord from "../../assets/img/DocumentsBom.png"
import Meet from "../../assets/img/Jitsiking.webp"
import Agenda from "../../assets/img/Imagens/Ferramentas/Agenda.png"
import Gmail from "../../assets/img/youtube.png"
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
        Curso="Curso"
        Usuario="Usuário"
        Ferramenta="Ferramentas"
        Gestor="Controle"
        Grafico="Gráficos"
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
            Titulo="Grist"
            // Botao= "Acessar"
            imagens={Excel}
          />

          <Card
            Titulo="Documents"
            // Botao= "Acessar"

            imagens={Discord}
          />

          <Card
            Titulo="Jitsi"
            // Botao= "Acessar"

            imagens={Meet}
          />

          <Card
            Titulo="Agenda"
            // Botao= "Acessar"

            imagens={Agenda}
          />

          <Card
            Titulo="Youtube"
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