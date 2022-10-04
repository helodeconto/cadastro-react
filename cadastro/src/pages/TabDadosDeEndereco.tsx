import { useState } from "react";
import InputCep from "../componentes/InputCep";
import InputCidades from "../componentes/InputCidades";
import InputEstados from "../componentes/Inputestados";
import { CepContextProvider } from "../providers/CepContext";

export default function() {

    return <>
        <h1>Dados de Endereço</h1>
        <CepContextProvider>
        <InputCep/>
        <InputEstados />
        <InputCidades />
        </CepContextProvider>
    </>
}