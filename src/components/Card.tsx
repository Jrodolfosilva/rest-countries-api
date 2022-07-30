import React from "react";
import {Link} from "react-router-dom"
import {CardStyle} from "../styled"


 function Card({dados}:any){
    return(
    <CardStyle>
    <Link to={`/description/${dados.name.common}`}>
        <img src={dados.flags.png} 
        alt={`Bandeira ${dados.name.common}`}></img>
        <h3>{dados.name.common}</h3>
        <p>Population: {dados.population}</p>
        <p>Region: {dados.region}</p>
        <p>Capital: {dados.capital}</p>
    </Link>
    </CardStyle>
    )
}
export default Card