import { Header } from "../../Components/Header/header";
import Banner from "../../assets/img/BannerHome.svg";
import ImagemHome from "../../assets/img/ImgHome.svg";
import IconDiscord from "../../assets/img/IconDiscord.svg";
import Footer from "../../Components/Footer/footer"
import logo from "../../assets/img/Logo.svg"
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";

export const Home = (props) => {


    //js


    return (

        <>
            <Header />

            <main className="main-home">
                <div className="banner-home">
                    <img src={Banner} alt="Banner da página home" />
                </div>
                <div className="fundo_home">
                    <div className="container_home">
                        <div className="campo_home">
                            <div className="campo_paragrafo">
                                <p>O Nexus nasceu com a ideia de simplificar o acesso às ferramentas digitais mais utilizadas no dia a dia.
                                    Em vez de perder tempo navegando entre várias plataformas diferentes, oferecemos um espaço único e integrado, onde o usuário pode encontrar tudo o que precisa de forma rápida, organizada e prática.
                                    Nosso objetivo é otimizar o tempo e aumentar a produtividade, criando uma experiência fluida que une tecnologia, design e funcionalidade.

                                </p>
                            </div>
                            <div className="campo_img">
                                <img src={ImagemHome} alt="Imagem da home" />
                            </div>
                        </div>
                    </div>



                        <div className="container_ferramentas">

                    <div className="fundo_ferramentas">


                            <div className="ferramentas_titulo">
                                <h1>Ferramentas</h1>

                            </div>
                            <div className="carrosel_d_ferramentas">

                                <Carousel>
                                    <Carousel.Item>
                                        <button className="Ferramenta">
                                            <img
                                            className="carrosel_ferramentas"
                                            src={IconDiscord}
                                            alt="Primeiro Slide"
                                        />
                                        </button>
                                        <Carousel.Caption>
                                            

                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <button className="Ferramenta">
                                        <img
                                            className="carrosel_ferramentas"
                                            src={IconDiscord}
                                            alt="Segundo Slide"
                                        />
                                        </button>
                                        <Carousel.Caption>
                                            

                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <button className="Ferramenta">
                                            <img
                                            className="carrosel_ferramentas"
                                            src={IconDiscord}
                                            alt="Terceiro Slide"
                                        /></button>
                                        <Carousel.Caption>
                                            {/* <h3>Discord</h3> */}

                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <button className="Ferramenta">
                                            <img
                                            className="carrosel_ferramentas"
                                            src={IconDiscord}
                                            alt="Quarto Slide"
                                        /></button>
                                        <Carousel.Caption>
                                            {/* <h3>Discord</h3> */}

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>


                            </div>

                        </div>

                    </div>






                </div>

            </main >
        <Footer/>

        </>

    )

}

