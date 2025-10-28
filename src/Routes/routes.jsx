import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";
import Gestor from "../Pages/Gestor/gestor";



export const Rotas = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} exact/>
        <Route path="/Gestor" element={<Gestor/>} exact/>
      </Routes>
    </BrowserRouter>  

  );
};
