import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import CardPais from "../components/CardPais";
import {ContainerDescription} from "../styled"





const Description = ()=>{
    const [dados,setDados]= useState([])
    const [error,setError]= useState(false)
    const {name} = useParams()
useEffect(()=>{
    axios.get(`https://restcountries.com/v3/all?fields=name,capital,flags,population,region,subregion,currency,languages,borders,tld`)
    .then((resp)=>setDados(resp.data))
    .catch(()=>setError(true))
    
},[])

const response = dados.filter((pais)=>pais?.name.common.toLowerCase().includes(name?.toLowerCase()))



const RenderPais= ()=>{
    return(
        <>
        {!response.length && !error?<p>Carregando...</p>:null}
        {response.length ?
            response.map((res)=>(<CardPais key={res.name.common}  dados={res}/>)):[]
        }   
        {error?<>Error</>:[]}    
        </>
    )
}

// console.log(fronteiras)

    return(
        <ContainerDescription>

        <RenderPais/>
        </ContainerDescription>
    ) 
}
export default Description