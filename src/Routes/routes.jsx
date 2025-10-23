import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";
<<<<<<< HEAD
=======
import Gestor from "../Pages/Gestor/gestor";
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b


export const Rotas = () => {
  return (
<<<<<<< HEAD
   
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Gestor" element={<Gestor />} />
      </Routes>
    </BrowserRouter>
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
  );
};
