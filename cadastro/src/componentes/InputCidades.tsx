import React, { ChangeEvent } from "react"
import { useContext, useEffect, useState } from "react"
import  {CepContext } from "../providers/CepContext"

export default function() {
    const { cidade, estado, setCidade } = useContext(CepContext)
    const [cidades, setCidades] = useState([])
    const [loading, setLoading] = useState(true)
    async function buscarCidades() {
        setLoading(true)
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        const cidades = await requestCidades.json()
        setCidades(cidades)
        setLoading(false)
    }
    
    useEffect(() => {
        buscarCidades()
    }, [estado])

    const selecionarCidade = (ev: ChangeEvent<HTMLSelectElement> ) => {
        setCidade(ev.currentTarget.value)
    }

    return <>
        {loading
            ? "loading cidades"
            : <select value={cidade} onChange={selecionarCidade}> {cidades.map(({ nome }, idx) => <option key={idx} value={nome}>{nome}</option>)} </select>
        }
    </>
}