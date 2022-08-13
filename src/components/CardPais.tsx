import {Link} from "react-router-dom"




 function CardPais ({dados}:any){
    
    const {name,topLevelDomain,capital,subregion,region,population,borders,nativeName,flags,currencies,languages} = dados    
    
    return(
    <div>
        <img src={flags.svg} 
        alt={`Bandeira ${name}`}></img>

        <div> 

            <h2>{dados.name.common}</h2>
            <p>Native name: <span>{nativeName}</span></p>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Sub Region: <span>{subregion}</span></p>
            <p>Capital: <span>{capital}</span></p>
            <p>Top Level Domain: <span>{topLevelDomain}</span></p>
            <p>Currencies: <span>{currencies[0].name}</span></p>
            <p>Languages: <span>{languages[0].name}</span></p>
        </div>       
        <div>
        {
        borders?<>{borders}</>
        :<>Esse pais não faça fronteiras</>    
        }
        </div>
 
    </div>
    )
}
export default CardPais 