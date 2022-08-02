import React,{useState,useEffect} from "react";
import axios from "axios";
import {ContainerRender,CardStyleSearch} from "../styled"
import Card from "./Card";

interface Pais {
    name:{
        common:String
    },
    capital:String,
    flags: Object,
    region:String,
    population:String
}

const Search = ()=>{
    const [dados,setDados] = useState<Pais[]>([])
    const [search,setSearch] = useState<String>("")
    const [region,setRegion] = useState("")
    let error:Boolean =  false
    let load:Boolean =  false

    
    useEffect(()=>{ 
         const url = `https://restcountries.com/v3/all?fields=name,capital,flags,population,region`    
        axios.get(url)
        .then((resp)=>{
            setDados(resp.data)
        })
        .catch((error)=>{
            console.log(error)
            error=true            
        })
        .finally(()=>{
      })

    },[])

    let response = dados.sort(function(a,b):any{
        if(a.name.common < b.name.common){
            return -1
        }
        else{
           return true
        }
        })

        if(search.length >1 || search.length >1 && region){
            response= dados.filter((pais)=>pais.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        if(region && !search){

            response= dados.filter((pais)=>pais.region.toLowerCase().includes(region.toLowerCase()))
        }

const ValidadeSearch= ()=>{
    //retorna a lista de paises com tratamento de erro
    if(load) return <p>Carregando...</p>
    if(error)return <p>OPS!! Algo deu errado...</p>

    if(response.length){
        
        return (//div container com todos os paises
            <ContainerRender>
                 {response.map((resp)=>(<Card key={resp.name.common} dados={resp}/>))} 
            </ContainerRender>
        )
    }
}
    return( //retorno real do componente Search
        <CardStyleSearch>
         {//condiciona o show da barra de Search ao **dados** para não mostrar barra de buscar sem primeiro fazer o get
            dados.length?<div>
                 <input type="search" placeholder={`${"LUPA   | "}Search for a country...`}  onChange={(e)=>setSearch(e.target.value)}
                />
                <select value={region} onChange={(e)=>setRegion(e.target.value)}  id="regions" >
                    <option value="" disabled>Filter by Region</option>
                    <option value="">All</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europa</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>: null
         }
        
        <div><ValidadeSearch/></div>
        
        </CardStyleSearch>
        
    )
}//renderiza o ValidadeSearch já com as tratativas de erros**pode ser passado para outro componente como props para organizar tipo passa para baixo para um home ou main
export default Search

