import React, { useState } from "react";
import ReactDOM from "react-dom";

const Planilhas = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [gristUrl] = useState("https://docs.getgrist.com");

  const handleLogin = () => {
    const googleWindow = window.open(
      "https://accounts.google.com/signin",
      "LoginGoogle",
      "width=600,height=700,left=200,top=100"
    );

    const checkLogin = setInterval(() => {
      if (googleWindow.closed) {
        clearInterval(checkLogin);
        setIsLoggedIn(true);
        setShowPopup(true);
      }
    }, 500);
  };

  const handleClosePopup = () => setShowPopup(false);

  const Button = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "white",
        width: "135px",
        height: "40px",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        background: "#FFF",
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
      {!isLoggedIn ? (
        <Button onClick={handleLogin} />
      ) : (
        <Button onClick={() => setShowPopup(true)} />
      )}

      {showPopup &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgb(0 0 0 / 41%)", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99999,
            }}
            onClick={handleClosePopup}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "90%",
                height: "85%",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Botão de fechar fixo no canto superior direito */}
              <button
                onClick={handleClosePopup}
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
                onMouseOver={(e) => (e.target.style.background = "#f0f0f0")}
                onMouseOut={(e) =>
                  (e.target.style.background = "rgba(255,255,255,0.9)")
                }
                title="Fechar"
              >
                ×
              </button>

              <iframe
                src={gristUrl}
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  flex: 1,
                }}
                title="Grist Spreadsheet"
              ></iframe>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Planilhas;
