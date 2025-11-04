import "./login.css";
// import loginImage from "../assets/img/fundoLogin.svg";
import loginImage from "../../assets/img/fundoLogin.svg"
import logoo from "../../assets/img/Logotipo/Logotipo SVG/pictogramaClaro.svg";
import Logo from "../../assets/img/imgLogin.png"

export const  Login = () => {
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
    </div>
  );
}
