import React from "react"
import {CardDescription} from "../styled"


function CardPais ({dados}:any){
    
    const {name,topLevelDomain,capital,subregion,region,population,borders,nativeName,flags,currencies,languages} = dados    
    
    return(
    <CardDescription>
        <img src={flags.svg} 
        alt={`Bandeira ${name}`}></img>

        <section>
            <h2>{name}</h2>
            <div>
                <div> 
                    <p>Native name: <span>{nativeName}</span></p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Sub Region: <span>{subregion}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>       
                <div>
                    <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                    <p>Currencies: <span>{currencies[0].name}</span></p>
                    <p>Languages: <span>{languages[0].name}</span></p>
                </div>
            </div>
            <div>
                <ul>
                <span>Border Countries:</span>
                    <>
                    
                    {borders.map((borda)=>(
                        <li key={borda}>{borda}</li>
                    ))}
                    </>
                </ul>
                </div>
        </section>
        
    </CardDescription>
    )
}
export default CardPais 