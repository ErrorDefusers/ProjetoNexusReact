import React, { useState } from "react";
import { createPortal } from "react-dom";

const Docs = () => {
    const [showModal, setShowModal] = useState(false);

    const docsUrl =
        "https://docs.google.com/document/d/14PM7k2UVk3HkowlcoRpqTg2LrU6Ea_YQCmrOfwx1zWk/edit?usp=sharing";

    const modalContent = (
        <div
            onClick={() => setShowModal(false)} // Fecha ao clicar fora
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
                zIndex: 9999,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro
                style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                    padding: "10px",
                    position: "relative",
                    width: "90%",
                    height: "90%",
                    maxWidth: "1200px",
                    maxHeight: "800px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Botão de fechar */}
                <button
                    onClick={() => setShowModal(false)}
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
                    onMouseOut={(e) => (e.target.style.background = "rgba(255,255,255,0.9)")}
                    title="Fechar"
                >
                    ×
                </button>

                {/* Iframe do Google Docs */}
                <iframe
                    title="Google Docs"
                    src={docsUrl}
                    style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                    }}
                    allowFullScreen
                />
            </div>
        </div>
    );

    return (
        <div style={{ textAlign: "center" }}>
            <button
                onClick={() => setShowModal(true)}
                className="botaoFerramenta"
                style={{
                    color: "blueviolet",
                    fontWeight: 500,
                    transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#EDE1FF")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
                Acessar
            </button>

            {/* Renderiza o modal via Portal (fora da hierarquia visual) */}
            {showModal && createPortal(modalContent, document.body)}
        </div>
    );
};

export default Docs;