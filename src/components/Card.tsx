import React from "react";
import {Link} from "react-router-dom"


 function Card({dados}:any){
    return(
    <div style={{
        backgroundColor:"white",
        width:"270px",
        height:"280px",
        borderRadius:"4px"
    }}
    >
    <Link to={`/description/${dados.name.common}`}>
        <img src={dados.flags.png} 
        alt={`Bandeira ${dados.name.common}`}
        style={{
            width:"270px",
            height:"135px"
            }}/>
        <h3>{dados.name.common}</h3>
        <p>Population: {dados.population}</p>
        <p>Region: {dados.region}</p>
        <p>Capital: {dados.capital}</p>
    </Link>
    </div>
    )
}
export default Card