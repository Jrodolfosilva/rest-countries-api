import {Link} from "react-router-dom"
import {CardStyleInfoPais} from "../styled"
interface Dados {
    name:{
        common:String,
        nativeName:String
    },
    population:String,
    region:String,
    subregion:String,
    capital:String,
    tld:String,
    currencies: String,
    languages:String,
}

 function CardPais ({dados,borders}:any){
    return(
    <CardStyleInfoPais>

        <img src={dados.flags[0]} 
        alt={`Bandeira ${dados.name.common}`}></img>
        <div> 

            <h2>{dados.name.common}</h2>
            <p>Native name: <span>{dados.name.common}</span></p>
            <p>Population: <span>{dados.population}</span></p>
            <p>Region: <span>{dados.region}</span></p>
            <p>Sub Region: <span>{dados.subregion}</span></p>
            <p>Capital: <span>{dados.capital}</span></p>
            <p>Top Level Domain: <span>{dados.tld}</span></p>
            <p>Currencies: <span>{dados.currency}</span></p>
            <p>Languages: <span>{dados.languages}</span></p>
        </div>
        
        
        
    </CardStyleInfoPais>
    )
}
export default CardPais 