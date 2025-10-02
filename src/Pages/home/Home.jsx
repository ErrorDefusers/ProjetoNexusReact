import { Header } from "../../Components/Header/header";
import Banner from "../../assets/img/BannerHome.svg";
import ImagemHome from "../../assets/img/ImgHome.svg";
import IconDiscord from "../../assets/img/IconDiscord.svg";
import "./Home.css";

export const Home = (props) => {
    return (

        <>
            <Header />

            <main className="main-home">
                <div className="banner-home">
                    <img src={Banner} alt="Banner da página home" />
                </div>
                <div className="fundo_home">

                    <div className="campo_home">
                        <div className="campo_paragrafo">
                            <p>O Nexus nasceu com a ideia de simplificar o acesso às ferramentas digitais mais utilizadas no dia a dia. 
                                Em vez de perder tempo navegando entre várias plataformas diferentes, oferecemos um espaço único e integrado, onde o usuário pode encontrar tudo o que precisa de forma rápida, organizada e prática.
                                Nosso objetivo é otimizar o tempo e aumentar a produtividade, criando uma experiência fluida que une tecnologia, design e funcionalidade. 
                                Além disso, o Nexus busca ser mais do que apenas uma plataforma: queremos ser a ponte entre você e suas soluções, facilitando processos, melhorando a gestão e centralizando recursos em um só lugar.
                                Com o Nexus, você ganha eficiência, praticidade e inovação ao alcance de um clique.</p>
                        </div>
                        <div className="campo_img">
                            <img src={ImagemHome} alt="Imagem da home" />
                        </div>
                    </div>
                </div>

                <div className="ferramentas">
                    <div className="fundo_ferramentas">
                        <div className="titulo">
                            <h1>Ferramentas</h1>
                        </div>

                        <div className="icons_ferramentas">
                            <img src={IconDiscord} alt="Icon das ferramentas" />
                            <img src={IconDiscord} alt="Icon das ferramentas" />
                            <img src={IconDiscord} alt="Icon das ferramentas" />
                        </div>
                    </div>
                </div>
            </main>


        </>

    )
}