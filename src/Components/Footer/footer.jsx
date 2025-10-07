import React from "react";
import logo from "../../assets/img/Logo.svg"
import "./footer.css";

// Importando a imagem corretamente
// import ChatGPTLogo from "../../assets/IMG/ChatGPT_logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo ChatGPT" className="footer-logo" />
      <div className="divvaziabarra"></div>
      <p className="fooooter">© 2025 - Todos os direitos reservados</p>
    </footer>
  );
}