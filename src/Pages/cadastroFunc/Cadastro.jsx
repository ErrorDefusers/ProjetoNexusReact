// import './Cadastro.css'
// import Footer from "../../Components/Footer/footer"
// import Header from "../../Components/Header/header"

// export const Cadastro = () => {
//   return (
//     <>
   
//       <Header/>
//     <main className="cadastro-container">
//       <h2 className='CorT'>Cadastro</h2>
//       <div className="cadastro-card">
        

//         <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
//           <div className="field">
//             <label>Nome:</label>
//             <input type="text" />
//           </div>

//           <div className="field">
//             <label>Setor:</label>
//             <select>
//               <option>Selecione</option>
//               <option>Financeiro</option>
//               <option>TI</option>
//               <option>RH</option>
//             </select>
//           </div>

//           <div className="field">
//             <label>E-mail:</label>
//             <input type="email" />
//           </div>

//           <div className="field">
//             <label>Cargo:</label>
//             <select>
//               <option>Selecione</option>
//               <option>Analista</option>
//               <option>Gerente</option>
//             </select>
//           </div>

//           <div className="field">
//             <label>Idade:</label>
//             <input type="number" />
//           </div>

//           <div className="field">
//             <label>Senha:</label>
//             <input type="password" />
//           </div>

//           <div className="actions">
//             <button type="submit" className="btn-primary">Cadastrar</button>
//           </div>
//         </form>
//       </div>
//     </main>
//       <Footer/>
//      </>
//   );
// }



import React, { useEffect, useState } from "react";
import "./Cadastro.css";
import Swal from "sweetalert2";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

export default function CadastroAdm() {
  const [setores, setSetores] = useState([]);
  const [cargos, setCargos] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [setorSelecionado, setSetorSelecionado] = useState("");
  const [cargoSelecionado, setCargoSelecionado] = useState("");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IktheWt5IiwiZW1haWwiOiJrYXlreW5hc2NpbWVudG9lcEBnbWFpbC5jb20iLCJyb2xlIjoiVXN1YXJpbyIsIm5iZiI6MTc2MTgzMzk3OCwiZXhwIjoxNzYxODM3NTc4LCJpYXQiOjE3NjE4MzM5NzgsImlzcyI6Ik5leHVzQVBJIiwiYXVkIjoiTmV4dXNBUElVc3VhcmlvcyJ9.64bPz8MXdggl5RNi2Qi8_z1CyTta5wXjl_x35upfr7I";

  useEffect(() => {
    fetch("https://localhost:7079/api/Funcionarios/setores", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setSetores(data))
      .catch(err => console.error("Erro ao carregar setores:", err));

    fetch("https://localhost:7079/api/Funcionarios/cargos", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setCargos(data))
      .catch(err => console.error("Erro ao carregar cargos:", err));
  }, []);

  const calcularDataNascimento = (idade) => {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = anoAtual - idade;
    return `${anoNascimento}-01-01`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idade || !setorSelecionado || !cargoSelecionado || !nome || !email || !senha) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Preencha todos os campos!',
        showConfirmButton: false,
        timer: 2500,
        background: 'rgba(182, 80, 229, 0.9)',
        color: 'white',
        showClass: { popup: 'swal2-show-animation' },
        hideClass: { popup: 'swal2-hide-animation' }
      });
      return;
    }

    const cargoSelecionadoNome = cargos.find(c => c.idTipoFuncionario === cargoSelecionado)?.tipoDeFuncionario || "";
    const dataNascimento = calcularDataNascimento(Number(idade));

    const url = new URL("https://localhost:7079/api/Funcionarios/criar");
    url.searchParams.append("nome", nome);
    url.searchParams.append("email", email);
    url.searchParams.append("senha", senha);
    url.searchParams.append("dataNascimento", dataNascimento);
    url.searchParams.append("cargo", cargoSelecionadoNome);
    url.searchParams.append("tipoFuncionarioId", cargoSelecionado);
    url.searchParams.append("setorId", setorSelecionado);
    url.searchParams.append("role", "Usuario");

    Swal.fire({
      title: 'Enviando cadastro...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      background: 'rgba(182, 80, 229, 0.1)',
      color: 'white'
    });

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Erro ao cadastrar funcionário");

      const data = await res.text();
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Funcionário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 2500,
        background: 'rgba(75, 0, 130, 0.9)',
        color: 'white',
        showClass: { popup: 'swal2-show-animation' },
        hideClass: { popup: 'swal2-hide-animation' }
      });

      setNome("");
      setEmail("");
      setSenha("");
      setIdade("");
      setSetorSelecionado("");
      setCargoSelecionado("");

    } catch (err) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Erro ao cadastrar!',
        text: err.message,
        showConfirmButton: false,
        timer: 3000,
        background: 'rgba(255, 0, 0, 0.9)',
        color: 'white',
        showClass: { popup: 'swal2-show-animation' },
        hideClass: { popup: 'swal2-hide-animation' }
      });
    }
  };

  return (
    <>
  <Header/>
    <main className="cadastro-container">
      <h2 className='CorT'>Cadastro</h2>
      <div className="cadastro-card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="field">
            <label>Nome:</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome" />
          </div>

          <div className="field">
            <label>Setor:</label>
            <select value={setorSelecionado} onChange={e => setSetorSelecionado(e.target.value)}>
              <option value="">Selecione</option>
              {setores.map(s => (
                <option key={s.idSetor} value={s.idSetor}>{s.tipoSetor}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>E-mail:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
          </div>

          <div className="field">
            <label>Cargo:</label>
            <select value={cargoSelecionado} onChange={e => setCargoSelecionado(e.target.value)}>
              <option value="">Selecione</option>
              {cargos.map(c => (
                <option key={c.idTipoFuncionario} value={c.idTipoFuncionario}>{c.tipoDeFuncionario}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Idade:</label>
            <input type="number" value={idade} onChange={e => setIdade(e.target.value)} min="18" max="100" placeholder="Digite sua idade" />
          </div>

          <div className="field">
            <label>Senha:</label>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha" />
          </div>

          <div className="actions">
            <button type="submit" className="btn-primary">Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
    <Footer/>
        </>
  );
}