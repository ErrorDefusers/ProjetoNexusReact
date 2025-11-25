import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Youtube() {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  // === PLAYLIST IFRAME TEMPLATES ===
  const playlists = {
    gerais: (
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/videoseries?si=stZm-ZqgvkWKzDLS&list=PL1oTtAFicAJuptKRRiqYGH1ZUGpQmtNvQ"
        title="Vídeos gerais"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: "10px", border: "solid 1px #777" }}
      ></iframe>
    ),

    musicas: (
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/videoseries?si=Gn7E6W3nLU25UGz0&list=PL1oTtAFicAJsRMhHVc74SAIhH875MKzfe"
        title="Músicas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: "10px", border: "solid 1px #777" }}
      ></iframe>
    ),

    cursos: (
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/videoseries?si=cmJt2mDQ3-r8YIj-&list=PL1oTtAFicAJuVarkWyY6mgKpwutFhYhSp"
        title="Cursos"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: "10px", border: "solid 1px #777" }}
      ></iframe>
    ),
  };

  // === QUANDO CLICA EM UMA PLAYLIST ===
  const handleOpenPlaylist = (type) => {
    setSelectedPlaylist(type);
    setShowOptionsModal(false);
    setShowPlayerModal(true);
  };

  // ======================================================
  // === PORTAL: Modal de Opções ===
  // ======================================================
  const OptionsModalPortal = () =>
    ReactDOM.createPortal(
      <div
        onClick={() => setShowOptionsModal(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99999,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #1B0034, #3B0C59)",
            padding: "40px",
            borderRadius: "20px",
            width: "90%",
            maxWidth: "600px",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            color: "white",
            boxShadow: "0 0 30px rgba(0,0,0,0.5)",
          }}
        >
          <button
            onClick={() => setShowOptionsModal(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              background: "transparent",
              border: "none",
              fontSize: "26px",
              color: "white",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <h2 style={{ gridColumn: "1 / span 2" }}>🎥 Escolha sua Playlist!</h2>

          <button className="custom-btn" onClick={() => handleOpenPlaylist("gerais")}>
            🎬 Vídeos gerais
          </button>

          <button className="custom-btn" onClick={() => handleOpenPlaylist("musicas")}>
            🎵 Músicas
          </button>

          <button
            className="custom-btn"
            style={{ gridColumn: "1 / span 2" }}
            onClick={() => handleOpenPlaylist("cursos")}
          >
            📚 Cursos
          </button>
        </div>
      </div>,
      document.body
    );

  // ======================================================
  // === PORTAL: Modal do Player ===
  // ======================================================
  const PlayerModalPortal = () =>
    ReactDOM.createPortal(
      <div
        onClick={() => setShowPlayerModal(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100000,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            width: "850px",
            maxWidth: "95vw",
            position: "relative",
          }}
        >
          <button
            onClick={() => setShowPlayerModal(false)}
            style={{
              position: "absolute",
                        top: "-7px",
                        right: "-8px",
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        fontSize: "22px",
                        cursor: "pointer",
                        color: "#333",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        transition: "0.2s ease",
            }}
          >
            ×
          </button>

          {playlists[selectedPlaylist]}
        </div>
      </div>,
      document.body
    );

  return (
    <div style={{ textAlign: "center"}}>
      <button
        onClick={() => setShowOptionsModal(true)}
        style={{
          backgroundColor: "white",
          width: "135px",
          height: "40px",
          borderRadius: "32px",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "blueviolet",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Acessar
      </button>

      {showOptionsModal && <OptionsModalPortal />}
      {showPlayerModal && <PlayerModalPortal />}

      <style>{`
        .custom-btn {
          background: white;
          color: #000;
          border: none;
          border-radius: 9999px;
          padding: 14px 30px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .custom-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
}
