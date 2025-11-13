import React, { useState } from "react";
import { createPortal } from "react-dom";

const Calendario = () => {
    const [showModal, setShowModal] = useState(false);

    const calendarUrl =
        "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&src=c2lsbG9jYXpvcmR2aWRlb3NAZ21haWwuY29t&src=ZmFtaWx5MDIyMDgxODc4MzAxMDY2NDIyNDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23b39ddb&color=%230b8043";

    const modalContent = (
        <div
            onClick={() => setShowModal(false)} // Fecha ao clicar fora
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgb(0 0 0 / 41%)", // Fundo escuro opaco, cobre tudo
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro
                style={{
                    backgroundColor: "#fff", // Fundo sólido
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                    position: "relative",
                    width: "90%",
                    height: "90%",
                    maxWidth: "1000px",
                    maxHeight: "800px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Botão de fechar isolado */}
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

                {/* Iframe do Google Calendar */}
                <iframe
                    title="Google Calendar"
                    src={calendarUrl}
                    style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px",
                    }}
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                />
            </div>
        </div>
    );

    return (
        <div style={{ textAlign: "center" }}>
            {/* Botão principal */}
            <button
                onClick={() => setShowModal(true)}
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
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#EDE1FF")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
                Acessar
            </button>

            {/* Renderiza o modal via Portal */}
            {showModal && createPortal(modalContent, document.body)}
        </div>
    );
};

export default Calendario;