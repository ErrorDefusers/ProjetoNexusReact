import React, { useEffect, useState } from "react";
import "../../Pages/perfil/Perfil.css";
import Footer from "../../Components/Footer/footer.jsx";
import { Header } from "../../components/Header/header.jsx";
import secureLocalStorage from "react-secure-storage";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [novaImagem, setNovaImagem] = useState(null);
  const [email, setEmail] = useState("");

  // Pegar email do token JWT
  useEffect(() => {
    const token = secureLocalStorage.getItem("tokenLogin");
    if (!token) return;

    try {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      setEmail(decoded.email);
    } catch (err) {
      console.error("Erro ao decodificar token:", err);
    }
  }, []);

  // Buscar dados do usuário usando o email
  useEffect(() => {
    if (!email) return;

    fetch(`https://localhost:7079/api/Funcionarios/buscar?email=${email}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data))
      .catch((err) => console.error("Erro:", err));
  }, [email]);

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  // Imagem de perfil: preview se selecionar nova imagem
  const imagemPerfil = novaImagem
    ? URL.createObjectURL(novaImagem)
    : usuario.imagemPerfil
    ? `https://localhost:7079${usuario.imagemPerfil}`
    : require("../../assets/img/IconUsuario.png");

  // Idade simples
  const idade = new Date().getFullYear() - new Date(usuario.dataNascimento).getFullYear();

  // Enviar nova imagem para API
  const trocarImagem = () => {
    if (!novaImagem) return;

    const formData = new FormData();
    formData.append("imagem", novaImagem);
    formData.append("id", usuario.idFuncionario); // só precisa do id

    fetch("https://localhost:7079/api/Funcionarios/atualizar-imagem", {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // Atualiza imediatamente a imagem na tela
        setUsuario({ ...usuario, imagemPerfil: data.imagemPerfil });
        setNovaImagem(null);
        alert("Imagem atualizada!");
      })
      .catch((err) => console.error("Erro:", err));
  };

  return (
    <>
      <Header />
      <main className="backgroundImagem">
        <div className="Janela_Perfil">
          <div className="BolinhaFoto">
            <img src={imagemPerfil} alt="Perfil" className="imagemperfiiil" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNovaImagem(e.target.files[0])}
            />
          </div>
          <button onClick={trocarImagem} className="botaoperfil">
            Trocar Foto
          </button>

          <h2 className="FotoPerfil">Foto de Perfil</h2>

          <div className="Informações">
            <div className="Quadrado"><h1 className="h1dequadrado">{usuario.nome}</h1></div>
            <div className="Quadrado"><h1 className="h1dequadrado">{idade} Anos</h1></div>
            <div className="Quadradoinf"><h1 className="h1dequadrado">{usuario.email}</h1></div>
            <div className="Quadradoinf"><h1 className="h1dequadrado">{usuario.cargo}</h1></div>
            <div className="QuadradoULT"><h1 className="h1dequadrado">{usuario.setor?.nome}</h1></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
