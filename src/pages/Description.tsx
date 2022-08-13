import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardPais from "../components/CardPais";






const Description = ()=>{
    const [dados,setDados]= useState([])
    const [error,setError]= useState(false)
    const {name} = useParams()
useEffect(()=>{
    axios.get("https://restcountries.com/v2/all?fields=name,nativeName,capital,flags,population,region,subregion,currencies,languages,topLevelDomain,borders")
    .then((resp)=>setDados(resp.data))
    .catch(()=>setError(true))
    
},[])

const response = dados.filter((pais)=>pais?.name.toLowerCase().includes(name?.toLowerCase()))



const RenderPais= ()=>{
    console.log(response)
    return(
        <>
        {!response.length && !error?<p>Carregando...</p>:null}
        {response.length ?
            response.map((res)=>(<CardPais key={res.name}  dados={res}/>)):[]
        }   
        {error?<>Error</>:[]}    
        </>
    )
}

// console.log(fronteiras)

    return(
        <div>

        <RenderPais/>
        </div>
    ) 
}
export default Description