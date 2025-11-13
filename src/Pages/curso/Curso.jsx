import React from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import { Botao } from '../../Components/Botao/botao';
import "./Curso.css";
import foto from "../../assets/img/ImgCurso.svg";

export default function Cursos() {



    return (
        <>
            <body className='alt'>


                <Header
                    Gestao="Gestão"
                    Home="Home"
                    // Curso="Curso"
                    Usuario="Usuário"
                    Ferramenta="Ferramentas"
                />

                <div className='main_cursos'>
                    <div className="img_curso"></div>

                    <div className='subtexto_cursos'>
                        <h3>
                            Cursos
                        </h3>

                    </div>

                    {/* <div className="img_curso2"></div> */}
                    <div className='quadro_cursos'>

                        <div className='cursos'>
                            <img className='cursos_img' src={foto} />
                            <p>Inteligência Artificial Descomplicada</p>
                            <Botao
                                nomeBotao="Acessar curso"

                            />
                        </div>

                        <div className='cursos'>
                            <img className='cursos_img' src={foto} />
                            <p>Inteligência Artificial Descomplicada</p>
                            <Botao
                                nomeBotao="Acessar curso"
                            />
                        </div>

                        <div className='cursos'>
                            <img className='cursos_img' src={foto} />
                            <p>Inteligência Artificial Descomplicada</p>
                            <Botao
                                nomeBotao="Acessar curso"
                            />
                        </div>

                        <div className='cursos'>
                            <img className='cursos_img' src={foto} />
                            <p>Inteligência Artificial Descomplicada</p>
                            <Botao
                                nomeBotao="Acessar curso"
                            />
                        </div>

                    </div>

                </div>
                <Footer />
            </body>
        </>
    )
}

