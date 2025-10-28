import React, { useEffect, useState } from "react";
import "../../Pages/Gestor/gestor.css";
import Editar from "../../assets/img/Editar.svg";

import ApexChart from "../../Components/Graficos/Linha/ApexChartsGestor.jsx";
import { Footer } from "../../Components/Footer/footer";
import { Header } from "../../Components/Header/header.jsx";
import Carousel from "../../Components/Carousel/carousel.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import api from "../../Services/services"; 
import Swal from "sweetalert2";

export const Gestor = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [editarFunc, setEditarFunc] = useState(null); // funcionário sendo editado

  useEffect(() => {
    async function carregarFuncionarios() {
      try {
        const resposta = await api.get("/Funcionarios/listar");
        setFuncionarios(resposta.data);
      } catch (erro) {
        console.error("Erro ao carregar funcionários:", erro);
        Swal.fire("Erro!", "Não foi possível carregar os funcionários.", "error");
      }
    }

    async function carregarTipos() {
      try {
        const resposta = await api.get("/TiposFuncionarios/listar");
        setTipos(resposta.data);
      } catch (erro) {
        console.error("Erro ao carregar tipos de funcionário:", erro);
      }
    }

    carregarFuncionarios();
    carregarTipos();
  }, []);

  async function salvarEdicao() {
    try {
      await api.put(`/Funcionarios/atualizar`, null, {
        params: {
          id: editarFunc.idFuncionario,
          nome: editarFunc.nome,
          email: editarFunc.email,
          senha: editarFunc.senha,
          dataNascimento: editarFunc.dataNascimento,
          cargo: editarFunc.cargo,
          tipoFuncionarioId: editarFunc.tipoFuncionarioId,
          setorId: editarFunc.setorId,
          role: editarFunc.role
        }
      });

      Swal.fire("Sucesso!", "Funcionário atualizado.", "success");

      // Atualiza o estado local para refletir na tela
      setFuncionarios(prev =>
        prev.map(f => f.idFuncionario === editarFunc.idFuncionario ? editarFunc : f)
      );

      setEditarFunc(null); // fecha modal
    } catch (erro) {
      console.error("Erro ao atualizar funcionário:", erro);
      Swal.fire("Erro!", "Não foi possível atualizar o funcionário.", "error");
    }
  }

  return (
    <>
      <Header />
      
      <main className="backgroundImagemM">
        <div className="Janela_Gestor">
          <div className="janelaMarketing">
            {/* <h1 className="Marketing">Marketing</h1> */}
            <div className="quadrado">
              <div className="ListaFunc">
                <div className="Arrumar">
                <h2 className="LDE">Marketing</h2>
                </div>
                <div className="Topicos">
                <div className="Nomes">
                <h4>Nome</h4>
                <p>Jucelino</p>
                </div>
                <div className="Cargos">
                <h4>Cargo</h4>
                <p>Gerente</p>
                </div>
                <div className="Editar">
                <h4>Editar</h4>
                <button className="BotaoEditar"><img src={Editar} alt="" /></button>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="FerramentasGrafico">
            {/* <h1>Ferramentas</h1> */}
            <div className="Ferramntasexemplo">
              <Carousel/>
              {/* <CarouselV/> */}
            </div>
            <div className="testee">
              <h2>Gráfico</h2>
            <div className="grafico">
              <ApexChart />
            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
