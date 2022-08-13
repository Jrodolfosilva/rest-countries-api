import React,{memo} from "react";
import {Link} from "react-router-dom"
import {CardStyle} from "../styled"


 function Card({dados}:any){
    const {name,capital,flags,population,region}= dados
    return(
    <CardStyle>
    <Link to={`/description/${name}`}>
        <img src={flags.svg} 
        alt={`Bandeira ${name}`}></img>
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
    </Link>
    </CardStyle>
    )
}
export default memo(Card) 