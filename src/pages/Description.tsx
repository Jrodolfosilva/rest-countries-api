import React from "react";
import {useParams} from "react-router-dom"


//posso passar o ValidateSearch para a Home/App/Root renderizar e dela passar como element do Route ou procurá usar o useContext 

const Description= ()=>{
    const {name} = useParams()
    
    return(
        <div>
            <h1>O pais que vocẽ deseja mais detalhes é o: {name}</h1>
        </div>
    )
}

export default Description