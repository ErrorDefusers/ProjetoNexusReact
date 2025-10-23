<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";
import api from "../../Services/services";
import { userDecodeToken } from "../../Auth";
import "./Login.css";
=======
import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";
import api from "../../Services/services";
import { userDecodeToken } from "../../Auth";
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
import Logo from "../../assets/img/Logo.svg";
import LoginImage from "../../assets/img/ImgLogin.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState(""); 
  const navigate = useNavigate();

  async function realizarAutenticacao(e) {
    e.preventDefault();

    if (!email || !senha) {
      return Swal.fire("Erro!", "Preencha email e senha.", "warning");
    }

    try {
<<<<<<< HEAD
      // **Alteração importante**: enviar "Password" em vez de "senha"
=======
     
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
      const resposta = await api.post("/Login", {
        email: email,
        password: senha
      });

      console.log(resposta);

<<<<<<< HEAD
      // Decodificar o token
=======
     
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
      const usuario = userDecodeToken(resposta.data.token);

      const tipoUsuarioToken = resposta.data.tipo;
      const nomeToken = resposta.data.nome;

<<<<<<< HEAD
      // Salva token seguro
      secureLocalStorage.setItem("tokenLogin", JSON.stringify(usuario));
      secureLocalStorage.setItem("tipoUsario", JSON.stringify(tipoUsuarioToken));

      // Feedback de sucesso
=======
      
      secureLocalStorage.setItem("tokenLogin", JSON.stringify(usuario));
      secureLocalStorage.setItem("tipoUsario", JSON.stringify(tipoUsuarioToken));

     
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
      Swal.fire({
        icon: "success",
        title: "Login realizado!",
        timer: 1500,
        showConfirmButton: false
      });

<<<<<<< HEAD
      // Redireciona conforme tipo de usuário
=======
      
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
      if (usuario.tipo === "Aluno") {
        navigate("/ListagemEventos");
      } else {
        navigate("/CadastrarEvento");
      }
    } catch (error) {
      Swal.fire("Erro!", "Email ou senha incorretos.", "error");
      console.log(error);
    }
  }

  return (
    <main className="main_login">
      <div className="logo_banner">
        <img src={LoginImage} alt="Banner login" />
      </div>
      <section className="section_login">
        <img src={Logo} alt="Logo" />
        <form className="form_login" onSubmit={realizarAutenticacao}>
          <div className="campos_login">
            <div className="campo_input">
<<<<<<< HEAD
              <input 
                className="Inpp"
=======
              <input
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="campo_input">
              <input
<<<<<<< HEAD
                className="Inpp"
=======
>>>>>>> a34e466af638070dc469ce1bec98e8f9a09f584b
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
