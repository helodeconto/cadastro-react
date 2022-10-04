import { useState } from "react";
import InputUsuario from "../componentes/InputUsuario";
import InputSenha from "../componentes/InputSenha";
import InputEmail from "../componentes/InputEmail";

export default function() {

    return <>
        <h1>Cadastro</h1>
        <InputUsuario />
        <InputEmail />
        <InputSenha />
    </>
}