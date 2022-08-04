import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import CardPais from "../components/CardPais";
const Description = ()=>{
    const [dados,setDados]= useState([])
    const [error,setError]= useState(false)
    const {name} = useParams()
useEffect(()=>{
    axios.get(`https://restcountries.com/v3/all?fields=name,capital,flags,population,region,subregion,currency,lang,borders,tld`)
    .then((resp)=>setDados(resp.data))
    .catch(()=>setError(true))
    
},[])
let borders = []
let fronteira =  dados.filter((pais)=>pais)//
let response = dados.filter((pais)=>pais?.name.common.toLowerCase().includes(name?.toLowerCase()))
console.log(response)

const RenderPais= ()=>{
    return(
        <>
        {!response.length && !error?<p>Carregando...</p>:null}
        {response.length ?
            response.map((res)=>(<CardPais key={res.name.common} dados={res}/>)):[]
        }   
        {error?<>Error</>:[]}    
        </>
    )
}



    return(
        <div style={{display:"flex",alignItems:"center"}}>

            <RenderPais/>
            <ul>
            <Link to="/description/argentina">
            <li>Argentina</li>
            </Link>
            <Link to="/description/brazil">
            <li>BRASIL</li>
            </Link>
            </ul>
        </div>
    ) 
}
export default Description