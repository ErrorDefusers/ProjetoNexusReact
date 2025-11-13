import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "../Pages/login/Login";
import Gestor from "../Pages/gestor/Gestor";
import  Cadastro  from "../Pages/cadastroFunc/Cadastro";
import  Cursos  from "../Pages/curso/Curso";
// import { Modulos } from "../Pages/Modulos/modulos";
import  {Home}  from "../Pages/home/Home";
import HomeAdmn from "../Pages/homeAdmn/Home_ADM";
import  Ferramentas  from "../Pages/ferramenta/Ferramenta";
import  Setor_Grafico  from "../Pages/Setor_grafico/Setor_Grafico";
import Perfil from "../Pages/perfil/TelaPerfil";
import CadastroCurso from "../Pages/cadastroCurso/CadastroCurso";


export const Rotas = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Gestor" element={<Gestor />} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Curso" element={<Cursos/>} />
        <Route path="/Perfil" element={<Perfil/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/HomeAdmn" element={<HomeAdmn/>} />
        <Route path="/Ferramentas" element={<Ferramentas/>} />
        <Route path="/Setor" element={<Setor_Grafico/>} />
        <Route path="/CCurso" element={<CadastroCurso/>} />
      </Routes>
    // </BrowserRouter>
  );
};