import React from "react";
import "./home_adm.css";
// import ImagemPerfil from "../assets/Group62.svg"
import cadastrousuario from "../../assets/img/Ícones/vectorCadastrar.svg"
import Cursos from "../../assets/img/Ícones/vectorCursos.svg";
import Editar from "../../assets/img/Ícones/vectorLapisEditar.svg"
import Excluir from "../../assets/img/Ícones/vectorLixeiraExcluir.svg"
// Importando a imagem corretamente
import CarouselADM from "../../Components/carroselADM/carroselADM.jsx";
// import Logo from "../assets/logotipoClaro.svg";
import Footer from "../../Components/Footer/footer.jsx";
import Header from "../../Components/Header/header.jsx";

export default function Home_ADM() {
  return (
    <>
      <body className="AttBodyADMH">
        <Header
          // Gestao="Gestão"
          Home="Home"
          Curso="Curso"
          Usuario="Usuário"
          Ferramenta="Ferramentas"
        />
        <main className="backgroundImagemm">
          <div className="Janela_HomeAdm">
            <div className="Separador">
              <h1 className="Listagem">Listagem<hr className="HR" /></h1>
              <div className="Setoresn">
                <CarouselADM


                />
              </div>
              {/* <div className="FotoTroca"> */}
            </div>
            <div className="ListagemQuadro">
              <h1 className="LDP">Lista de Empregados</h1>

              <div className="Listagemdentro">
                <div className="Nome"><h5>Nome</h5><div className="arrumarn">Jucelino</div></div>
                <div className="Setor"><h5>Setor</h5><div className="arrumanr">RH</div></div>
                <div className="Cargo"><h5>Cargo</h5><div className="arrumarn">Diretor</div></div>
                <div className="Editar"><h5>Editar</h5><div className="arrumarn"><button className="Botaofunc"><img src={Editar} alt="" /></button></div></div>
                <div className="Excluir"><h5>Excluir</h5><div className="arrumarn"><button className="Botaofunc"><img src={Excluir} alt="" /></button></div></div>
              </div>
            </div>
            {/* </div> */}
            <div className="quadrinhojuntar">
              <div className="quadradoCad">
                <button type="button" className="Att">
                  <img className="imagemss" src={cadastrousuario} alt="Ícone de curso" />
                  <p className="Pv">Cadastro Usuário</p>
                </button>
              </div>



              <div className="quadradoCad">
                <button type="button" className="Att">
                  <img className="imagemss" src={Cursos} alt="Ícone de curso" />
                  <p className="Pv">Cursos</p>
                </button>

              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}
