import "./header.css";
import Logo from "../../assets/img/Logotipo/Logotipo SVG/logotipoClaro.svg";
import Perfil from "../../assets/img/user2.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

const Header = ({ Home, Ferramenta, Curso, Usuario, Gestao, hideCurso, Gestor, Grafico }) => {

  const [tipoUsuario, setTipoUsuario] = useState("");

  function validarTipoUsuario() {
    const token = secureLocalStorage.getItem("tokenLogin");

    if (!token) return;

    // Decodifica o token
    const decoded = jwtDecode(token);

    // Pega o "role" do token
    const role = decoded.role;

    console.log(role)

    // Salva no estado
    setTipoUsuario(role);
  }

  const location = useLocation();

  useEffect(() => {

    validarTipoUsuario();
    // efeito ripple em cada link
    const links = document.querySelectorAll(".nav-link");

    const handleClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      e.target.style.setProperty("--x", e.clientX - rect.left + "px");
      e.target.style.setProperty("--y", e.clientY - rect.top + "px");
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header-nav">

        <div className="div-img">
          <Link className="nav-link" to={"/Home"}>
            <img src={Logo} alt="Logo do ValueWork" />
          </Link>
        </div>

        <div className="barradepesquisa">
          <div className="input-group">
            <div className="input-icon"></div>
          </div>
        </div>
        {tipoUsuario == "Admin" && (
          <>
            {/* nav_admin */}
            <nav className="menu-desktop">
              <ul>

                {location.pathname !== "/home" && (
                  <li>
                    <Link className="nav-link" to="/Home">{Home}</Link>
                  </li>
                )}

                {location.pathname !== "/ferramentas" && (
                  <li>
                    <Link className="nav-link" to="/ferramentas">{Ferramenta}</Link>
                  </li>
                )}

                {!hideCurso && location.pathname !== "/curso" && (
                  <li>
                    <Link className="nav-link" to="/curso">{Curso}</Link>
                  </li>
                )}

                {location.pathname !== "/HomeAdm" && (
                  <li>
                    <Link className="nav-link" to="/HomeAdm">{Gestao}</Link>
                  </li>
                )}
              </ul>

              <ul>
                {location.pathname !== "/perfil" && (
                  <li>
                    <Link className="nav-link" to="/perfil">{Usuario}</Link>
                  </li>
                )}


              </ul>
            </nav>
          </>
        )}
        {tipoUsuario == "Gestor" && (
          <>
            {/* nav_gestor */}
            <nav className="menu-desktop">
              <ul>

                {location.pathname !== "/home" && (
                  <li>
                    <Link className="nav-link" to="/Home">{Home}</Link>
                  </li>
                )}

                {location.pathname !== "/ferramentas" && (
                  <li>
                    <Link className="nav-link" to="/ferramentas">{Ferramenta}</Link>
                  </li>
                )}

                {!hideCurso && location.pathname !== "/curso" && (
                  <li>
                    <Link className="nav-link" to="/curso">{Curso}</Link>
                  </li>
                )}

                {location.pathname !== "/Gestor" && (
                  <li>
                    <Link className="nav-link" to="/Gestor">{Gestor}</Link>
                  </li>
                )}
                {location.pathname !== "/Setor" && (
                  <li>
                    <Link className="nav-link" to="/Setor">{Grafico}</Link>
                  </li>
                )}
              </ul>

              <ul>
                {location.pathname !== "/perfil" && (
                  <li>
                    <Link className="nav-link" to="/perfil">{Usuario}</Link>
                  </li>
                )}


              </ul>
            </nav>
          </>
        )}

        {tipoUsuario == "Usuario" && (
          <>
            {/* nav_func */}
            <nav className="menu-desktop">
              <ul>

                {location.pathname !== "/home" && (
                  <li>
                    <Link className="nav-link" to="/Home">{Home}</Link>
                  </li>
                )}

                {location.pathname !== "/ferramentas" && (
                  <li>
                    <Link className="nav-link" to="/ferramentas">{Ferramenta}</Link>
                  </li>
                )}

                {!hideCurso && location.pathname !== "/curso" && (
                  <li>
                    <Link className="nav-link" to="/curso">{Curso}</Link>
                  </li>
                )}
              </ul>

              <ul>
                {location.pathname !== "/perfil" && (
                  <li>
                    <Link className="nav-link" to="/perfil">{Usuario}</Link>
                  </li>
                )}


              </ul>
            </nav>
          </>
        )}

      </div>
    </header>
  );
};

export default Header;
