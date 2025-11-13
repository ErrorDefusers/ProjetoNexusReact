import "./login.css";
// import loginImage from "../assets/img/fundoLogin.svg";
import loginImage from "../../assets/img/fundoLogin.svg"
import logoo from "../../assets/img/Logotipo/Logotipo SVG/pictogramaClaro.svg";
import Logo from "../../assets/img/imgLogin.png"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";
import api from "../../Services/services";

export const  Login = () => {

Swal.fire({
  icon: "success",
  title: "Login realizado!",
  text: "Bem-vindo(a) de volta!",
  background: "#1a1a1d",
  color: "#ffffff",
  timer: 1800,
  showConfirmButton: false,
  timerProgressBar: true,
  toast: true,
  position: "top-end",
  iconColor: "#a66bff",

  customClass: {
    popup: "swal-popup",
    title: "swal-title",
    timerProgressBar: "swal-timer-bar",
  },
});

Swal.fire({
  icon: "error",
  title: "Erro ao fazer login",
  text: "Email ou senha incorretos.",
  background: "#1a1a1d",
  color: "#ffffff",
  iconColor: "#ff5c74",
  confirmButtonColor: "#a66bff",

  customClass: {
    popup: "swal-popup",
    title: "swal-title",
  },
});


return Swal.fire({
  icon: "warning",
  title: "Atenção!",
  text: "Preencha email e senha.",
  background: "#1a1a1d",
  color: "#ffffff",
  iconColor: "#ffd66c",
  confirmButtonColor: "#a66bff",

  customClass: {
    popup: "swal-popup",
    title: "swal-title",
  },
});




  return (
    <div className="login-container">
      
      {/* Lado Esquerdo */}
      <div className="fundoLogin">

      </div>
      <div className="login-left">
      <img src={Logo} alt="Login visual" className="side-image" />
      </div>
      

      {/* Lado Direito */}
      <div className="login-right">
        
      <div className="logo-box">
          <img src={logoo} alt="logo VenueWork" />
          <h1 className="subtitle">Acesse sua conta!</h1>
          <p>Insira seus dados para acessar sua conta.</p>
        </div>

        <form className="login-form" onSubmit={realizarAutenticacao}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="fulano@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="********"  
           onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
    </div>
    </div>
  );
}
