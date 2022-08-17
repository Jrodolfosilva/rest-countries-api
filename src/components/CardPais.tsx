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
                    <p>Native name: 
                        <span>
                            {
                            nativeName?
                            nativeName
                            :<>not found</>
                        }
                        </span>
                    </p>
                    <p>Population: 
                        <span>
                            {population}
                        </span>
                    </p>
                    <p>Region: 
                        <span>
                            {region}
                        </span>
                    </p>
                    <p>Sub Region: 
                        <span>
                            {
                            subregion 
                        }
                        </span>
                    </p>
                    <p>Capital:
                         <span>
                            {
                            capital
                            }
                         </span>
                    </p>
                </div>       
                <div>
                    <p>Top Level Domain:
                         <span>
                            { topLevelDomain?
                              topLevelDomain
                              :<>not found</>
                              }
                         </span>
                    </p>
                    <p>Currencies:
                         <span>{
                            currencies?
                            currencies[0].name
                            :<>not found</>
                            }
                         </span>
                    </p>
                    <p>Languages:
                         <span>
                            {
                            languages?
                            languages[0].name
                            :<>not found</>
                        }
                         </span>
                    </p>
                </div>
            </div>
            <div>
                <ul>
                <span>Border Countries:</span>
                    <>
                    
                    
                    {
                    borders?
                    borders.map((borda:any)=>(
                        <li key={borda}>{borda}</li>
                    ))
                    :<>does not make borders</>}
                
                    </>
                </ul>
                </div>
        </section>
        
    </CardDescription>
    )
}
export default CardPais 