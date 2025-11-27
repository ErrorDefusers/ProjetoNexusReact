import React, { useEffect, useState } from "react";
import "./telaperfil.css";
import ImagemDefault from "../../assets/img/user1.png";
import Footer from "../../Components/Footer/footer.jsx";
import Header from "../../Components/Header/header.jsx";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [novaImagem, setNovaImagem] = useState(null);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  
  useEffect(() => {
    const token = secureLocalStorage.getItem("tokenLogin");
    if (!token) {
      console.warn("⚠️ Nenhum token encontrado!");
      return;
    }

    try {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      console.log("🔍 Token decodificado:", decoded);

      const emailDecoded =
        decoded.email || decoded.unique_name || decoded.sub || "";

      if (emailDecoded) {
        console.log("📧 Email decodificado:", emailDecoded);
        setEmail(emailDecoded);
      } else {
        console.warn("⚠️ Nenhum campo de e-mail encontrado no token!");
      }
    } catch (err) {
      console.error("❌ Erro ao decodificar token:", err);
    }
  }, []);

  
  useEffect(() => {
    if (!email) return;

    const token = secureLocalStorage.getItem("tokenLogin");

    fetch(`https://localhost:7079/api/Funcionarios/buscar?email=${email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ Usuário retornado da API:", data);
        setUsuario(data);
      })
      .catch((err) => console.error("❌ Erro ao buscar funcionário:", err));
  }, [email]);

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  
  const imagemPerfil = novaImagem
    ? URL.createObjectURL(novaImagem)
    : usuario.imagemPerfil
    ? `https://localhost:7079${usuario.imagemPerfil}`
    : ImagemDefault;
;

  
  const idade =
    new Date().getFullYear() -
    new Date(usuario.dataNascimento).getFullYear();

  
  const trocarImagem = () => {
    if (!novaImagem) return;

    const formData = new FormData();
    formData.append("imagem", novaImagem);
    formData.append("id", usuario.idFuncionario);

    fetch("https://localhost:7079/api/Funcionarios/atualizar-imagem", {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsuario({ ...usuario, imagemPerfil: data.imagemPerfil });
        setNovaImagem(null);
        alert("Imagem atualizada com sucesso!");
      })
      .catch((err) => console.error("❌ Erro ao atualizar imagem:", err));
  };

  
  const handleLogout = () => {
    secureLocalStorage.removeItem("tokenLogin");
    navigate("/"); 
  };

  return (
    <>
      <div className="ArrumarTamanhoBodyTelaPerfil">
        <Header
          Gestao="Gestão"
          Home="Home"
          Curso="Curso"
          Ferramenta="Ferramentas"
        />

        <main className="backgroundImagem">
          
          <div className="Janela_Perfil">
            <div className="BolinhaFoto">
              <img
                src={imagemPerfil}
                alt="Perfil"
                className="imagemperfiiil"
                onClick={() => document.getElementById("inputImagem").click()}
              />

              <input
                id="inputImagem"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const arquivo = e.target.files[0];
                  if (arquivo) {
                    setNovaImagem(arquivo);

                    const formData = new FormData();
                    formData.append("imagem", arquivo);
                    formData.append("id", usuario.idFuncionario);

                    fetch(
                      "https://localhost:7079/api/Funcionarios/atualizar-imagem",
                      {
                        method: "PUT",
                        body: formData,
                      }
                    )
                      .then((res) => {
                        if (!res.ok) {
                          throw new Error(`Erro HTTP ${res.status}`);
                        }
                        return res.json();
                      })
                      .then((data) => {
                        setUsuario({
                          ...usuario,
                          imagemPerfil: data.imagemPerfil,
                        });
                        setNovaImagem(null);
                        alert("Imagem atualizada com sucesso!");
                      })
                      .catch((err) =>
                        console.error("❌ Erro ao atualizar imagem:", err)
                      );
                  }
                }}
              />
            </div>

            <h2 className="FotoPerfil">Perfil</h2>

            <div className="Informações">
              <div className="arrumandobugsdeespaco">
                <div className="Quadrado">
                  <h1 className="h1dequadrado">{usuario.nome}</h1>
                </div>
                <div className="Quadrado">
                  <h1 className="h1dequadrado">{idade} Anos</h1>
                </div>
                <div className="Quadradoinf">
                  <h1 className="h1dequadrado">{usuario.email}</h1>
                </div>
                <div className="Quadradoinf">
                  <h1 className="h1dequadrado">{usuario.cargo}</h1>
                </div>
                <div className="QuadradoULT">
                  <h1 className="h1dequadrado">{usuario.setor?.tipoSetor}</h1>
                </div>

                <button
                  className="botao_desconctar"
                  onClick={handleLogout}
                >
                  Desconectar
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
