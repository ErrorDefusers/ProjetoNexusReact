import React, { useState } from "react";
import ReactDOM from "react-dom";

const Meet = () => {
  const [showModal, setShowModal] = useState(false);

  const roomName = "ReuniaoDaVenue";
  const jitsiUrl = `https://meet.jit.si/${roomName}`;

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const Button = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "white",
        width: "135px",
        height: "40px",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        color: "blueviolet",
        fontWeight: 500,
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#EDE1FF")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
    >
      Acessar
    </button>
  );

  return (
    <div style={{ textAlign: "center"}}>
      <Button onClick={handleOpen} />

      {showModal &&
        ReactDOM.createPortal(
          <div
            onClick={handleClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "90%",
                height: "85%",
                maxWidth: "1200px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Botão de fechar */}
              <button
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
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
                onMouseOver={(e) => (e.target.style.background = "#f0f0f0")}
                onMouseOut={(e) =>
                  (e.target.style.background = "rgba(255,255,255,0.9)")
                }
                title="Fechar"
              >
                ×
              </button>

              {/* Iframe Jitsi */}
              <iframe
                title="Jitsi Meet"
                src={jitsiUrl}
                allow="camera; microphone; fullscreen; display-capture"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  flex: 1,
                }}
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Meet;
