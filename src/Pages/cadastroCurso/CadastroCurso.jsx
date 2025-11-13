import { useState, useRef } from "react";
import Header from '../../Components/Header/header';
import Footer from "../../Components/Footer/footer";
import "../cadastroCurso/CadastroCurso.css";

export default function CadastroCurso() {
  const [imagemPreview, setImagemPreview] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <body>
      <Header
        Gestao="Gestão"
        Home="Home"
        Curso="Curso"
        Usuario="Usuário"
        Ferramenta="Ferramentas"
      />
      <main className="boa">
        <div className="Janela_CadastroCurso">
          {/* BLOCO DA IMAGEM */}
          <div className="IMAGEMM">
            <div className="ArrumarNomeEscolher">
              <p className="Cour">Escolher Imagem:</p>
            </div>

            <button className="ImagemCurso" onClick={handleClick}>
              {imagemPreview ? (
                <img
                  src={imagemPreview}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <p className="TextoEscolher">Clique para escolher imagem</p>
              )}
            </button>

            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          {/* BLOCO DOS INPUTS */}
          <div className="BlocoInputs">
            <div className="Campo">
              <label className="LabelCurso">Nome do Curso</label>
              <input className="InputCurso" type="text" placeholder="Digite o nome..." />
            </div>

            <div className="Campo">
              <label className="LabelCurso">Link do video</label>
              <input className="InputCurso" type="link" placeholder="Digite o link..." />
            </div>

            <div className="Campo">
              <label className="LabelCurso">Descrição</label>
              <textarea
                className="InputDescricao"
                placeholder="Descreva o curso..."
                rows={4}
              />
            </div>
          </div>
          <div className="Criar"><button className="tamanhoBotaocriar">Criar</button></div>
        </div>
      </main>
      <Footer />
    </body>
  );
}
