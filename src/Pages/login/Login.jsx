import "./login.css";
import ImgLogin from "../../assets/img/ImgLogin.png"
import logoo from "../../assets/img/Logotipo/Logotipo SVG/pictogramaClaro.svg";
import Logo from "../../assets/img/imgLogin.png"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";
import api from "../../Services/services";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function realizarAutenticacao(e) {
    e.preventDefault();

    // ALERTA - CAMPOS VAZIOS
    if (!email || !senha) {
      return Swal.fire({
        icon: "warning",
        title: "Ops...",
        text: "Preencha email e senha para continuar.",
        confirmButtonText: "Entendi",
      });
    }

    try {
      const resposta = await api.post("/Login", {
        email: email,
        password: senha,
      });

      secureLocalStorage.setItem("tokenLogin", resposta.data.token);

      // ALERTA - LOGIN OK
      Swal.fire({
        icon: "success",
        title: "Login realizado!",
        text: "Bem-vindo(a) de volta!",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        willClose: () => {
          
          Swal.close();
        }
      });


      setTimeout(() => {
        navigate("/Perfil");
      }, 1500);

    } catch (error) {

      // ALERTA - LOGIN FALHOU
      Swal.fire({
        icon: "error",
        title: "Credenciais inválidas",
        text: "Email ou senha incorretos. Tente novamente.",
        confirmButtonText: "Ok",
      });

      console.log(error);
    }
  }

  return (
    <div className="login-container">

      <div className="login-right">
        <img src={ImgLogin} alt="Login visual" className="side-image" />
      </div>

      <div className="login-left">
        <div className="logo-box">
          <img src={logoo} alt="Logo" className="logo-img" />
          <p className="subtitle">Acesse sua conta!</p>
          <hr className="divider" />
        </div>

        <form className="login-form" onSubmit={realizarAutenticacao}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="fulano@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
