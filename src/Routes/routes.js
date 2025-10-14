


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact />
                <Route path="/TipoEvento" element={<Privado tipoPermitido="Aluno" item={TipoEvento}/>} exact />
                <Route path="/TipoUsuario" element={<Privado tipoPermitido="Aluno" item={TipoUsuario}/>} exact />
                <Route path="/Cadastroevento" element={<Privado tipoPermitido="Aluno" item={Cadastroevento}/>} exact />
                <Route path="/Listagemevento" element={<Privado tipoPermitido="Aluno" item={Listagemevento}/>} exact />
                 <Route path="/Home" element={<Privado tipoPermitido="Aluno" item={Home}/>} exact />                 
               


            </Routes>
        </BrowserRouter>
    )
}

