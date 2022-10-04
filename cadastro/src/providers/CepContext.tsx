import React, { Dispatch, SetStateAction, useState } from "react";

type CepContextType = {
    cidade: string
    setCidade: Dispatch<React.SetStateAction<string>> 
    estado: string
    setEstado: Dispatch<SetStateAction<string>>
}

export const CepContext = React.createContext({} as CepContextType)

export const CepContextProvider = (props: React.PropsWithChildren ) => {
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    return<>
    <CepContext.Provider value={{setCidade, setEstado, cidade, estado}}>
        {props.children}
    </CepContext.Provider>
    </>

}