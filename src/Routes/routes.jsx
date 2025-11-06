import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";
import Gestor from "../Pages/Gestor/gestor";
import Perfil from "../Pages/perfil/Perfil";
import Cadastro from "../Pages/cadastroFunc/CadastroFunc";
import Ferramentas from "../Pages/ferramenta/Ferramenta";
import Curso from "../Pages/curso/Curso";
import Setor from "../Pages/Setor_grafico/Setor_Grafico";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Gestor" element={<Gestor />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Ferramentas" element={<Ferramentas />} />
        <Route path="/Curso" element={<Curso />} />
        <Route path="/Setor" element={<Setor />} />
      </Routes>
    </BrowserRouter>
  );
};
