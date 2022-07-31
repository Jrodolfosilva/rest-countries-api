import React,{createContext,useContext} from "react";


export const GlobalContext = createContext();

export const StoreContext = ({childrem})=>{
    return(
        <GlobalContext.Provider value={"testando conteudo do "}>
            {childrem}
        </GlobalContext.Provider>
    )
}

