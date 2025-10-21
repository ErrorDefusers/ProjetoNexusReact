import './App.css'
import {Header} from "./Components/Header/header";
import {Home} from "./Pages/home/Home";
import {Login} from "./Pages/login/Login"
import {Ferramentas} from "./Pages/ferramenta/Ferramenta";
import {Cursos} from "./Pages/curso/Curso";
import {Cadastro} from "./Pages/cadastroFunc/CadastroFunc";
import { Modulos } from "./Pages/Modulos/modulos";
import {Setor_Grafico} from "./Pages/Setor_grafico/Setor_Grafico";
import Gestor from "./Pages/Gestor/gestor";

function App() {
  return (
    <>
     {/* <Header/> */}
     {/* <Home/> */}
     {/* <Login/> */}
     {/* <Ferramentas/> */}
     {/* <Cursos/> */}
     {/* <Modulos /> */}
     <Setor_Grafico />
     {/* <Gestor /> */}

    </>
  );
}

export default App;
