import React from "react";
import {Link} from "react-router-dom"
import {CardMain} from "../styled"


 function Card({dados}:any){
    const {name,capital,flags,population,region}= dados
    return(
    <CardMain>
        <Link to={`/description/${name}`}>
            <img src={flags.svg} 
            alt={`Bandeira ${name}`}/>
            <h3>{name}</h3>
            <p>Population: <span> {population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
        </Link>
    </CardMain>
    )
}


export default Card 