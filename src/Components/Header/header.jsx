import "./header.css";
import Logo from "../../assets/img/Logo.svg";
import Perfil from "../../assets/img/IconUsuario.png";
import Lupa from "../../assets/img/Lupa.svg";

export const Header = (props) => {
 return(
    
    <header>
    <div className="header-nav">
        <div className="div-img">
        <img src={Logo} alt="Logo do Nexus" />

        </div>

        <div className="barradepesquisa">

            <div className="input-group">

                <div className="input-icon">
                    {/* <img src={Lupa} alt="Icon de lupa" /> */}
                </div>
            </div>

                <input id="search" 
                type="text" 
                className="pesquisar"
                 ></input>
        

        </div>

        <nav className="menu-desktop">
            <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ferramentas</a></li>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Usuário</a></li>
                </ul>

                <img src={Perfil} alt="Imagem do usuário"/>
        </nav>
    </div>

    </header>
    
 )
}