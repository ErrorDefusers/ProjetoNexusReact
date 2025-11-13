import "./header.css";
import Logo from "../../assets/img/Logotipo/Logotipo SVG/logotipoClaro.svg";
import Perfil from "../../assets/img/IconUsuario.png";
import Lupa from "../../assets/img/Lupa.svg";
import { Link } from "react-router-dom";
// import menu from "../../assets/img/menu-burguer.png";

const Header = ({ Home, Ferramenta, Curso, Usuario, Gestao }) => {
    return (

        <header className="header">
            <div className="header-nav">
                <div className="div-img">
                    <Link to={"/home"}>
                        <img src={Logo} alt="Logo do ValueWork" />

                    </Link>
                    {/* <a href="./Home"></a> */}
                </div>

                <div className="barradepesquisa">

                    <div className="input-group">

                        <div className="input-icon">
                            {/* <img src={Lupa} alt="Icon de lupa" /> */}
                        </div>
                    </div>

                    {/* <input id="search" 
                type="text" 
                className="pesquisar"
                 ></input> */}


                </div>

                <nav className="menu-desktop">
                    <ul>
                        <li><a href="./Home">{Home}</a></li>
                        <li><a href="./Ferramentas">{Ferramenta}</a></li>
                        <li><a href="./Curso">{Curso}</a></li>
                        <li><a href="./Perfil">{Usuario}</a></li>
                        <li><a href="./HomeAdmn">{Gestao}</a></li>
                    </ul>

                    <img href="./Perfil" src={Perfil} alt="Imagem do usuário" />
                </nav>

            </div>
            {/* <div className="menu">
            <img src={menu} alt="icon menu lateral" />
        </div> */}

        </header>

    )
}
export default Header;