import "../styles/login.css";
import loginImage from "../assets/IMG/Group55.svg"; // coloque sua imagem aqui
import logoo from "../assets/IMG/ChatGPT_logo.png";

function Login() {
  return (
    <div className="login-container">
      {/* Lado Esquerdo */}
      <div className="login-left">
        <div className="logo-box">
          <img src={logoo} alt="" />
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
      <div className="login-right">
        <img src={loginImage} alt="Login visual" className="side-image" />
      </div>
    </div>
  );
}

export default Login;
