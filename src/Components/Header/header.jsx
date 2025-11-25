import "./header.css";
import Logo from "../../assets/img/Logotipo/Logotipo SVG/logotipoClaro.svg";
import Perfil from "../../assets/img/user2.png";
import { Link, useLocation } from "react-router-dom";

const Header = ({ Home, Ferramenta, Curso, Usuario, Gestao, hideCurso }) => {
    
    const location = useLocation(); // <-- Pega a rota atual

    return (
        <header className="header">
            <div className="header-nav">

                <div className="div-img">
                    <Link to={"/home"}>
                        <img src={Logo} alt="Logo do ValueWork" />
                    </Link>
                </div>

                <div className="barradepesquisa">
                    <div className="input-group">
                        <div className="input-icon"></div>
                    </div>
                </div>

                <nav className="menu-desktop">
                    <ul>

                        {/* 👇 Só aparece se NÃO estiver na rota /home */}
                        {location.pathname !== "/home" && (
                            <li><Link to="/home">{Home}</Link></li>
                        )}

                        {location.pathname !== "/ferramentas" && (
                            <li><Link to="/ferramentas">{Ferramenta}</Link></li>
                        )}

                        {/* Só aparece se NÃO estiver em Curso e hideCurso for false */}
                        {!hideCurso && location.pathname !== "/curso" && (
                            <li><Link to="/curso">{Curso}</Link></li>
                        )}


                        {location.pathname !== "/homeadmn" && (
                            <li><Link to="/homeadmn">{Gestao}</Link></li>
                        )}
                    </ul>
                    <ul>
                        {location.pathname !== "/perfil" && (
                            <li><Link to="/perfil">{Usuario}</Link></li>
                        )}
                    <img src={Perfil} alt="Imagem do usuário" />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
