import React,{useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import {ContainerDescription} from "../styled"
import CardPais from "../components/CardPais";


const Description= ()=>{
    const [dados,setDados] = useState([]);
    const [borders,setBorders] = useState("")
    const {name} = useParams()

    useEffect(()=>{
        axios.get(`https://restcountries.com/v3/name/${name}?fields=name,capital,flags,population,region,subregion,currency,lang,borders,tld`)
        .then((resp)=>{
        setDados(resp.data)
    })
    .catch((error)=>{
        console.log(error)           
    })
    .finally(()=>{
    })
},[])

//segundo get depois que tivermos dados do pais principal
useEffect(()=>{
    axios.get(`https://restcountries.com/v2/alpha?codes=${"arg"}`)
    .then((resp)=>setBorders(resp.data))
},[dados])
let pais ="" 
dados.map((obj)=>pais=obj)


    return(
        <ContainerDescription>
            <input type="button" value="BACK"/>
            {
                pais?
                <section>
                <div>
                    <img src={pais.flags[0]} alt={`Bandeira-${pais.tld}`}/>
                </div>
                <CardPais pais={pais}/>
            </section>:<>carregando....</>
            }
                            
        </ContainerDescription>
    )
}

export default Description




//exemplo para filtrar os border por code: BR< PR
///https://restcountries.com/v2/alpha?codes=fra,deu