// import React, { useState, useEffect } from "react";
// import "../../Pages/homeAdmn/home_adm.css";
// import Lista from "../../components/Lista/lista";
// import Header from "../../Components/Header/header";
// import Footer from "../../Components/Footer/footer";
// import CarroselADM from "../../Components/carroselADM/carroselADM";
// import ImagemCU from "../../assets/img/Ícones/vectorCadastrar.svg";
// import ImagemCC from "../../assets/img/Ícones/vectorCursos.svg";
// import { Link } from "react-router-dom";
// import api from "../../Services/services";
// import Swal from "sweetalert2";

// const HomeAdm = () => {
//   const [funcionarios, setFuncionarios] = useState([]);
//   const [setorSelecionado, setSetorSelecionado] = useState(null);

//   const alertar = (icone, mensagem) => {
//     Swal.fire({
//       toast: true,
//       position: "top-end",
//       icon: icone,
//       title: mensagem,
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//     });
//   };

//   const listarFuncionario = async () => {
//     try {
//       const resposta = await api.get("/Funcionarios/listar");
//       setFuncionarios(resposta.data);
//     } catch (error) {
//       console.error("Erro ao listar funcionários:", error);
//       alertar("error", "Erro ao listar funcionários!");
//     }
//   };

//   const deletarFuncionario = async (funcionario) => {
//     try {
//       const result = await Swal.fire({
//         title: "Você tem certeza?",
//         text: "Essa ação não poderá ser desfeita!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Sim, excluir!",
//       });

//       if (result.isConfirmed) {
//         await api.delete(`/Funcionarios/deletar/${funcionario.idFuncionario}`);
//         alertar("success", "Funcionário excluído com sucesso!");
//         listarFuncionario();
//       }
//     } catch (error) {
//       console.error(error);
//       alertar("error", "Erro ao excluir funcionário!");
//     }
//   };

//   const editarFuncionario = async (funcionario) => {
//     const { value: formValues } = await Swal.fire({
//       title: "Editar Funcionário",
//       html: `
//         <input id="nome" class="swal2-input" placeholder="Nome" value="${funcionario.nome}">
//         <input id="email" class="swal2-input" placeholder="Email" value="${funcionario.email}">
//         <input id="senha" type="password" class="swal2-input" placeholder="Senha (vazio = mantém)">
//         <input id="dataNascimento" type="date" class="swal2-input" placeholder="Data Nascimento" value="${funcionario.dataNascimento?.split('T')[0] || ''}">
//         <input id="cargo" class="swal2-input" placeholder="Cargo" value="${funcionario.cargo}">
//       `,
//       focusConfirm: false,
//       showCancelButton: true,
//       confirmButtonText: "OK",
//       cancelButtonText: "Cancelar",
//       preConfirm: () => {
//         const nome = document.getElementById("nome").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const senha = document.getElementById("senha").value.trim();
//         const dataNascimento = document.getElementById("dataNascimento").value;
//         const cargo = document.getElementById("cargo").value.trim();

//         if (!nome || !email || !dataNascimento || !cargo) {
//           Swal.showValidationMessage("Todos os campos obrigatórios devem ser preenchidos!");
//           return false;
//         }
//         return { nome, email, senha, dataNascimento, cargo };
//       },
//     });

//     if (formValues) {
//       try {
//         await api.put("/Funcionarios/atualizar", null, {
//           params: {
//             id: funcionario.idFuncionario,
//             nome: formValues.nome,
//             email: formValues.email,
//             senha: formValues.senha || "",
//             dataNascimento: formValues.dataNascimento,
//             cargo: formValues.cargo,
//             tipoFuncionarioId: funcionario.tipoFuncionario?.idTipoFuncionario,
//             setorId: funcionario.setor?.idSetor,
//             role: funcionario.role || "user",
//           },
//         });
//         alertar("success", "Funcionário atualizado com sucesso!");
//         listarFuncionario();
//       } catch (error) {
//         console.error(error);
//         alertar("error", "Erro ao atualizar funcionário!");
//       }
//     }
//   };

//   useEffect(() => {
//     listarFuncionario();
//   }, []);

//   // 🔹 Filtra funcionários de acordo com setor clicado
//   const funcionariosFiltrados = setorSelecionado
//     ? funcionarios.filter(f => f.setor?.nome === setorSelecionado)
//     : funcionarios;

//   return (
//     <div className="AttBodyADM">
//       <Header Home="Home" Gestao="Gestão" Curso="Curso" Usuario="Usuário" Ferramenta="Ferramentas" />

//       <main className="backgroundImagem">
//         <div className="Janela_HomeAdm">
//           <h1 className="ListagemH1">Listagem</h1>

//           {/* Carrossel que envia setor clicado */}
//           <CarroselADM onSelectSetor={setSetorSelecionado} />

//           {/* Lista filtrada */}
//           <Lista
//             funcionarios={funcionariosFiltrados}
//             funcExcluir={deletarFuncionario}
//             funcEditar={editarFuncionario}
//           />
//         </div>

//         <div className="ajustes">
//           <button className="CadastroUsuario">
//             <img src={ImagemCU} alt="" />
//             <Link className="TirarEfLink" to="/CadastroCurso">Cadastrar Usuario</Link>
//           </button>

//           <button className="CadastroCursos">
//             <img style={{ width: "60px" }} src={ImagemCC} alt="" />
//             <Link className="TirarEfLink" to="/Cadastro">Cadastrar Cursos</Link>
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default HomeAdm;

import React, { useState, useEffect } from "react";
import "../../Pages/homeAdmn/home_adm.css";
import Lista from "../../components/Lista/lista";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import CarroselADM from "../../Components/carroselADM/carroselADM";
import ImagemCU from "../../assets/img/Ícones/vectorCadastrar.svg";
import ImagemCC from "../../assets/img/Ícones/vectorCursos.svg";
import { Link } from "react-router-dom";
import api from "../../Services/services";
import Swal from "sweetalert2";

const HomeAdm = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [setorSelecionado, setSetorSelecionado] = useState(null);

  const alertar = (icone, mensagem) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: icone,
      title: mensagem,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const listarFuncionario = async () => {
    try {
      const resposta = await api.get("/Funcionarios/listar");
      setFuncionarios(resposta.data);
    } catch (error) {
      console.error("Erro ao listar funcionários:", error);
      alertar("error", "Erro ao listar funcionários!");
    }
  };

  const deletarFuncionario = async (funcionario) => {
    try {
      const result = await Swal.fire({
        title: "Você tem certeza?",
        text: "Essa ação não poderá ser desfeita!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir!",
      });

      if (result.isConfirmed) {
        await api.delete(`/Funcionarios/deletar/${funcionario.idFuncionario}`);
        alertar("success", "Funcionário excluído com sucesso!");
        listarFuncionario();
      }
    } catch (error) {
      console.error(error);
      alertar("error", "Erro ao excluir funcionário!");
    }
  };

  const editarFuncionario = async (funcionario) => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Funcionário",
      html: `
        <input id="nome" class="swal2-input" placeholder="Nome" value="${funcionario.nome}">
        <input id="email" class="swal2-input" placeholder="Email" value="${funcionario.email}">
        <input id="senha" type="password" class="swal2-input" placeholder="Senha (vazio = mantém)">
        <input id="dataNascimento" type="date" class="swal2-input" placeholder="Data Nascimento" value="${funcionario.dataNascimento?.split('T')[0] || ''}">
        <input id="cargo" class="swal2-input" placeholder="Cargo" value="${funcionario.cargo}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const dataNascimento = document.getElementById("dataNascimento").value;
        const cargo = document.getElementById("cargo").value.trim();

        if (!nome || !email || !dataNascimento || !cargo) {
          Swal.showValidationMessage("Todos os campos obrigatórios devem ser preenchidos!");
          return false;
        }
        return { nome, email, senha, dataNascimento, cargo };
      },
    });

    if (formValues) {
      try {
        await api.put("/Funcionarios/atualizar", null, {
          params: {
            id: funcionario.idFuncionario,
            nome: formValues.nome,
            email: formValues.email,
            senha: formValues.senha || "",
            dataNascimento: formValues.dataNascimento,
            cargo: formValues.cargo,
            tipoFuncionarioId: funcionario.tipoFuncionario?.idTipoFuncionario,
            setorId: funcionario.setor?.idSetor,
            role: funcionario.role || "user",
          },
        });
        alertar("success", "Funcionário atualizado com sucesso!");
        listarFuncionario();
      } catch (error) {
        console.error(error);
        alertar("error", "Erro ao atualizar funcionário!");
      }
    }
  };

  useEffect(() => {
    listarFuncionario();
  }, []);

  // 🔹 Filtra funcionários com base no setor clicado
  const funcionariosFiltrados = setorSelecionado
    ? funcionarios.filter(f => f.setor?.nome === setorSelecionado)
    : funcionarios;

  return (
    <div className="AttBodyADM">
      <Header Home="Home" Gestao="Gestão" Curso="Curso" Usuario="Usuário" Ferramenta="Ferramentas" />

      <main className="backgroundImagem2">
        <div className="Janela_HomeAdm">
          <h1 className="ListagemH1">Listagem</h1>

          {/* Carrossel que envia setor clicado */}
          <CarroselADM onSelectSetor={setSetorSelecionado} />

          {/* Lista filtrada */}
          <Lista
            funcionarios={funcionariosFiltrados}
            funcExcluir={deletarFuncionario}
            funcEditar={editarFuncionario}
          />
        </div>

        <div className="ajustes">
          <button className="CadastroUsuario">
            <img src={ImagemCU} alt="" />
            <Link className="TirarEfLink" to="/CadastroCurso">Cadastrar Usuario</Link>
          </button>

          <button className="CadastroCursos">
            <img style={{ width: "60px" }} src={ImagemCC} alt="" />
            <Link className="TirarEfLink" to="/Cadastro">Cadastrar Cursos</Link>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeAdm;
