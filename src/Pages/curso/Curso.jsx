import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { Botao } from "../../Components/Botao/botao";
import "./Curso.css";
import foto from "../../assets/img/ImgCurso.svg";
import api from "../../../src/Services/services";
import { Link } from "react-router-dom";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    api
      .get("/Cursos")
      .then((response) => {
        console.log("Cursos carregados:", response.data);
        setCursos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar cursos:", error);
      });
  }, []);

  return (
    <>
      <Header
        Home="Home"
        Ferramenta="Ferramentas"
        Curso="Cursos"
        Usuario="Perfil"
        Gestao="Gestão"
        
      />

      <div className="main_cursos">
        <div className="img_curso"></div>

        <div className="subtexto_cursos">
          <h3>Cursos</h3>
        </div>

        <div className="quadro_cursos">
          {cursos.length > 0 ? (
            cursos.map((curso) => (
              <div key={curso.idCurso} className="cursos">
                <img
                  className="cursos_img"
                  src={curso.imagemCapa ? curso.imagemCapa : foto}
                  alt={curso.titulo}
                />

                <p>{curso.titulo}</p>

                <Link to={`/cursoVideo/${curso.idCurso}`}>
                  <Botao nomeBotao="Acessar curso" />
                </Link>
              </div>
            ))
          ) : (
            <p style={{ color: "#fff" }}>Nenhum curso encontrado.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
