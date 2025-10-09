import React from 'react'
import "./CadastroFunc.css";
import {Header} from "../../Components/Header/header";
import {Footer} from "../../Components/Footer/footer";
import { Botao } from "../../Components/Botao/botao";



export const Cadastro = () => {
    return (

        <>
            <Header/>

            <main className="main_cadastro">


                <div className='main_cadastro'>

                    <div className='titulo_cadastro'>
                        <h2>Cadastro</h2>
                        <hr className='hr_cadastro' />
                    </div>

                    <div className="img_curso1"></div>

                    <div className='sessao_cadastro'>

                        <div className='inputs_divisoria1'>

                            <div className='inputs_cadastro'>
                                <label>Nome:</label>
                                <input type="text" placeholder='Insira Aqui' className='input_cadastro' />
                            </div>

                            <div className='inputs_cadastro'>
                                <label>E-mail:</label>
                                <input type="email" placeholder='Insira Aqui' className='input_cadastro' />
                            </div>

                            <div className='inputs_cadastro'>
                                <label>Senha:</label>
                                <input type="password" placeholder='Insira Aqui' className='input_cadastro' />
                            </div>

                            <div className='inputs_cadastro'>
                                <label>Idade:</label>
                                <input type="text" placeholder='Insira Aqui' className='input_cadastro' />
                            </div>
                        </div>

                        <div className='inputs_divisoria2'>

                            <div className='inputs_divisoria3'>

                                <div className='inputs_cadastro'>
                                    <label>Cargo</label>
                                    <select name="" id="" className='input_cadastro'>U.I.A</select>
                                </div>

                                <div className='inputs_cadastro'>
                                    <label >Setor</label>
                                    <select name="" id="" className='input_cadastro'>Agricultura</select>
                                </div>
                            </div>

                            <div className='inputs_divisoria4'>

                                <Botao
                                    nomeBotao="Cadastrar" />

                            </div>

                        </div>

                    </div>
                </div>
                <Footer/>

            </main>
        </>
    )
}
