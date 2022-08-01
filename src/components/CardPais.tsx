import React from "react";
// import { Link } from "react-router-dom";
import {CardStyleInfoPais} from "../styled"

type PaisDados =  {
    name:{
        common:String,
        nativeName:String,
    },
    population: String,
    region: String,
    subregion: String,
    capital: String,
    tld:String,
    lang: String,
    currencies: String,
    

}

const CardPais = ({pais})=>{
   
   
    return(
        <CardStyleInfoPais>
            {pais?
                <ul>
                    <h1>{pais.name.common}</h1>
                    <li>Native Name: <span>{pais.name.nativeName}</span></li>
                    <li>Population: <span>{pais.population}</span></li>
                    <li>Region: <span>{pais.region}</span></li>
                    <li>Subregion: <span>{pais.subregion}</span></li>
                    <li>Capital: <span>{pais.capital}</span></li>
                    <li>Top Level Domain: <span>{pais.tld}</span></li>
                    <li>Currencies: <span>{pais.currencies}</span></li>
                    <li>Languages: <span>{pais.lang}</span></li>
                </ul>:
                <>Carregando...</>
            }
            
            
        </CardStyleInfoPais>
    )
}
export default CardPais

/* <div>
                <p>Border Countries:</p>
                {borders.map((border:Object)=>(
                   <Link to={`description/${border.name.common}`}>
                   <span>{border.name.common}</span>
                   </Link>
               ))}
            // </div> */