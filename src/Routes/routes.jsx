import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "../Pages/login/Login";
import {Gestor} from "../Pages/gestor/Gestor";
import { Cadastro } from "../Pages/cadastroFunc/CadastroFunc";
import { Cursos } from "../Pages/curso/Curso";
import { Modulos } from "../Pages/Modulos/modulos";
import { Home } from "../Pages/home/Home";
import { Ferramentas } from "../Pages/ferramenta/Ferramenta";
import { Setor_Grafico } from "../Pages/Setor_grafico/Setor_Grafico";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Gestor" element={<Gestor />} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Curso" element={<Cursos/>} />
        <Route path="/Modulo" element={<Modulos/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Ferramenta" element={<Ferramentas/>} />
        <Route path="/Setor" element={<Setor_Grafico/>} />

      </Routes>
    </BrowserRouter>
  );
};