import React from 'react'
import "./Ferramenta.css"
import imgCard from "../../assets/img/IconDiscord.svg";
import { Header } from "../../Components/Header/header";
import { Footer } from "../../Components/Footer/footer";
import { Botao } from "../../Components/Botao/botao";

 export const Ferramentas = () => {
  return (
    <>
    <Header/>

      <div className='main_ferramentas'>

        <div className="img_ferramentas"></div>

        <div className='titulo_ferramentas'>
            <h2>Ferramentas</h2>
            <hr className='hr_ferramentas'/>
        </div>

         <div className="img_ferramentas2"></div>

        
        <div className='sessao_ferramentas'>

          <div className='card_ferramentas'>
                <img src = {imgCard} alt="" />
                <p>Google Meet</p>
                <Botao
                nomeBotao = "Acessar"
                />
          </div>

          <div className='card_ferramentas'>
                <img src = {imgCard} alt="" />
                <p>Google Meet</p>
                <Botao
                nomeBotao = "Acessar"
                />
          </div>

          <div className='card_ferramentas'>
                <img src = {imgCard} alt="" />
                <p>Google Meet</p>
                <Botao
                nomeBotao = "Acessar"
                />
          </div>

          <div className='card_ferramentas'>
                <img src = {imgCard} alt="" />
                <p>Google Meet</p>
                <Botao
                nomeBotao = "Acessar"
                />
          </div>

          <div className='card_ferramentas'>
                <img src = {imgCard} alt="" />
                <p>Google Meet</p>
                <Botao
                nomeBotao = "Acessar"
                />
          </div>

          <div className='card_ferramentas'>
                <img src = {imgCard} alt="" />
                <p>Google Meet</p>
                <Botao
                nomeBotao = "Acessar"
                />
          </div>

        </div>

      </div>

    <Footer/>

    </>
  )
}

// export default Ferramentas