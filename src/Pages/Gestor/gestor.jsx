import React from "react";
// import "../styles/tela_perfil.css";
import "../../Pages/Gestor/gestor.css"

// Imports de imagens
// import ImagemPerfil from "../assets/IMG/Group 62.svg";
// import IconDiscord from "../assets/IMG/Blue.png"; // <-- adicione o caminho correto aqui
// import ChatGPTLogo from "../assets/IMG/ChatGPT_logo.png";
import Editar from "../../assets/img/Editar.svg"

// Componentes
import ApexChart from "../../Components/Graficos/Linha/ApexChartsGestor.jsx";
import { Footer } from "../../Components/Footer/footer";
import { Header } from "../../Components/Header/header.jsx";

// Carrossel do Bootstrap
// import CarouselV from "../components/carroselV/CarouselV.jsx";
import Carousel from "../../Components/Carousel/carousel.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Gestor() {
    return (
        <>
            <Header />
            <main className="backgroundImagemM">
                <div className="Janela_Gestor">
                    <div className="janelaMarketing">
                        <h1 className="Marketing">Marketing</h1>
                        <div className="quadrado">
                            <div className="ListaFunc">
                                <h2 className="LDE">Lista de Empregados</h2>
                                <div className="Topicos">
                                    <div className="Nomes">
                                        <h4>Nome</h4>
                                        <p>Jucelino</p>
                                    </div>
                                    <div className="Cargos">
                                        <h4>Cargo</h4>
                                        <p>Gerente</p>
                                    </div>
                                    <div className="Editar">
                                        <h4>Editar</h4>
                                        <button className="BotaoEditar"><img src={Editar} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="FerramentasGrafico">
                        <h1>Ferramentas</h1>
                        <div className="Ferramntasexemplo">
                            <Carousel />
                            {/* <CarouselV/> */}
                        </div>

                        <div className="grafico">
                            <ApexChart />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}