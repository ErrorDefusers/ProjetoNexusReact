import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";
import Gestor from "../Pages/Gestor/gestor";
import Perfil from "../Pages/perfil/Perfil";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Gestor" element={<Gestor />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
};
