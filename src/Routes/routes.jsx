import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { getToken } from "../services/authService";

import Login from "../Pages/login/Login";
import Gestor from "../Pages/Gestor/Gestor";
import Perfil from "../Pages/perfil/TelaPerfil";
import Cadastro from "../Pages/cadastroFunc/Cadastro";
import Ferramentas from "../Pages/ferramenta//Ferramenta";
import Curso from "../Pages/curso/Curso";
import Setor from "../Pages/Setor_grafico/Setor_Grafico";
import CadastroCurso from "../Pages/cadastroCurso/CadastroCurso";
import CursoVideo from "../Pages/cursoVideo/Curso"; 
import HomeAdm from "../Pages/homeAdmn/Home_ADM"; 
import { Home } from "../Pages/home/Home";

// // Protege a rota usando loader
// async function requireAuth() {
//   const token = getToken();
//   if (!token) throw redirect("/login");
//   return null;
// }

const Privado = (props) => {
    const { usuario } = useAuth();

  // Se não estiver autenticado, manda para login
  if (!usuario) {
    return <Navigate to="/" />;
  }

  // Se o tipo do usuário não for o permitido, bloqueia
  if (usuario.tipoUsuario !== props.tipoPermitido) {
    return <Navigate to="/" />;
  }

  // Senão, renderiza o componente passado
  return <props.Item />;
};

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/Gestor" element={<Privado tipoPermitido="Gestor" Item={Gestor} />} /> */}
        <Route path="/Gestor" element={<Gestor />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Ferramentas" element={<Ferramentas />} />
        <Route path="/Curso" element={<Curso />} />
        <Route path="/Setor" element={<Setor />} />
        <Route path="/CadastroCurso" element={<CadastroCurso />} />
        <Route path="/HomeAdm" element={<HomeAdm />} />
        <Route path="/cursoVideo/:idCurso" element={<CursoVideo />} />


          {/* <Route element = {<Privado tipoPermitido="admin" Item={TipoDeEvento} />}  path="/TipoDeEvento" /> */}
      </Routes>
    </BrowserRouter>
  );
};