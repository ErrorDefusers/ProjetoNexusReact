import React from "react";
import "./Login.css";
import loginImage from "../../assets/img/ImgLogin.png"; // coloque sua imagem aqui
import logoo from "../../assets/img/Logo.svg";

export const Login = (props) => {
    return (
        <>
            <div className="login-container">
                {/* {/* Lado Esquerdo /} */}
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
                        <input type="password" id="password" placeholder="**" required />

                        <button type="submit" className="login-btn">
                            Entrar
                        </button>
                    </form>
                </div>

                <div className="img_desfoque">

                    <div className="img_desfoque2">



                        {/* {/ Lado Direito */}
                        <div className="login-right">
                            <img src={loginImage} alt="Login visual" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
