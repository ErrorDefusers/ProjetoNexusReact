import "../../Pages/login/Login.css";
import loginImage from "../../../src/assets/img/ImgCurso.svg"; // coloque sua imagem aqui
import imgFundo from "../../assets/img/fundoLogin.svg"
import logo from "../../assets/img/Logotipo/Logotipo SVG/pictogramaClaro.svg"



export const Login = () => {
  return (
    <div className="login-container">
      {/* Lado Esquerdo */}
      <div className="login-left">
        <div className="logo-box">
          <img src={logo} alt="" />
          <p className="subtitle">Acesse sua conta!</p>
          <hr className="divider" />
        </div>

        <form className="login-form">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="fulano@gmail.com"
            required
          />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="********" required />

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>

      {/* Lado Direito */}
      <div className="login-fundo">
        <img src={imgFundo} alt="imagem de fundo da login" />
      </div>
      <div className="login-right">
        <img src={loginImage} alt="Login visual" className="side-image" />
      </div>
    </div>
  );
}