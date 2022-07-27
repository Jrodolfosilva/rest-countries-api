import React from "react";



 function Card({dados}:any){
    return(
    <div style={{
        backgroundColor:"white",
        width:"250px",
    }}>
        <img src={dados.flags.svg} alt={`Bandeira ${dados.name.common}`} style={{maxWidth:"250px"}}/>
        <h3>{dados.name.common}</h3>
        <p>Population: {dados.population}</p>
        <p>Region: {dados.region}</p>
        <p>Capital: {dados.capital}</p>

    </div>
    )
}
export default Card