import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/Login";


export const Rotas = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    
  );
};
