import './App.css'
import {Login} from './Pages/login/Login';
import Gestor from './Pages/gestor/Gestor.jsx';
import Perfil from './Pages/perfil/TelaPerfil.jsx';
import Cadastro from './Pages/cadastroFunc/Cadastro.jsx';
import Ferramenta from "./Pages/ferramenta/Ferramenta.jsx";
import Grafico from "./Pages/Setor_grafico/Setor_Grafico.jsx";
import Curso from "./Pages/curso/Curso.jsx";
import {Home} from "./Pages/home/Home.jsx";
import HomeAdmn from "./Pages/homeAdmn/Home_ADM.jsx"
import Header from "./Components/Header/header.jsx";
import Footer from "./Components/Footer/footer.jsx";
import { Rotas } from './Routes/routes.jsx';

function App() {
  return (
    <>
    {/* <Footer/> */}
    {/* <Header/>  */}
      {/* <Login/> */} 
      {/* <Gestor/> */}
      {/* <Perfil/> */}
      {/* <Cadastro/>  */}
      {/* <Ferramenta/> */}
      {/* <Grafico/> */}
      {/* <Curso/> */}
      {/* <Home/> */}
      {/* <HomeAdmn/> */}
      <Rotas/>
    </>
  );
}

export default App;
