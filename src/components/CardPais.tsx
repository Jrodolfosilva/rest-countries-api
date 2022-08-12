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

 function CardPais ({dados}:any){
    const {name,nativeName,population,region,subregion,capital,tld, currency,languages} = dados
    return(
    <CardStyleInfoPais>

        <img src={dados.flags[0]} 
        alt={`Bandeira ${name}`}></img>
        <div> 

            <h2>{dados.name.common}</h2>
            <p>Native name: <span>{nativeName}</span></p>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Sub Region: <span>{subregion}</span></p>
            <p>Capital: <span>{capital}</span></p>
            <p>Top Level Domain: <span>{""}</span></p>
            <p>Currencies: <span>{""}</span></p>
            <p>Languages: <span>{languages[0]}</span></p>
        </div>
        
        
        
    </CardStyleInfoPais>
    )
}
export default CardPais 