import { KeyboardEvent, useContext } from "react"
import { CepContext } from "../providers/CepContext"


export default function (){
    const { setCidade } = useContext(CepContext) 
    const { setEstado } = useContext(CepContext)

    const dataMascara = async (ev: KeyboardEvent<HTMLInputElement>) => {
        if(ev.key == 'Backspace') return
        if(ev.key.match(/\D/)) {
            ev.preventDefault()
            ev.stopPropagation()
            return
        }
    }
    const verificar = async (ev: KeyboardEvent<HTMLInputElement>) => {
        if(ev.currentTarget.value.length == 8){
        const requestCepInformation = await fetch(`https://viacep.com.br/ws/${ev.currentTarget.value}/json/`)
            const cepInformation = await requestCepInformation.json()
            setCidade(cepInformation.localidade)
            setEstado(cepInformation.uf)
        } 

    }
    
    return <>
    <input type="text" maxLength={8} placeholder="Digite o CEP" onKeyDown={dataMascara} onKeyUp={verificar}></input>
    </>
}