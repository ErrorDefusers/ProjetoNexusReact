import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";
import Gestor from "../Pages/Gestor/gestor";
import Perfil from "../Pages/perfil/Perfil";
import Cadastro from "../Pages/cadastroFunc/CadastroFunc";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Gestor" element={<Gestor />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};
