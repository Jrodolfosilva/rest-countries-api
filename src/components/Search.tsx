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
    const [search,setSearch] = useState("")
    const [region,setRegion] = useState("")
    const [error,setError] = useState(false)    

    
    useEffect(()=>{
        
        const url = `https://restcountries.com/v2/all?fields=name,nativeName,capital,flags,population,region`    
        axios.get(url)
        .then((resp)=>{
            setDados(resp.data)
        })
        .catch(()=>{     
            setError(true)      
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

        if(search.length  || search.length  && region){
            response= dados.filter((pais)=>pais.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(region && !search){

            response= dados.filter((pais)=>pais.region.toLowerCase().includes(region.toLowerCase()))
            
        }
const RenderSearch= ()=>{
    return(
        <>
        {!dados.length && !error?<p>Carregando...</p>:null}
        {response.length ?
            <ContainerRender>
                {response.map((resp)=>(<Card key={resp.name} dados={resp}/>))} 
            </ContainerRender>:[]}
        {error?<>Error</>:[]}    
        </>
    )
}
    return( //retorno real do componente Search
        <CardStyleSearch>
         {
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
        
        <div><RenderSearch/></div>
        
        </CardStyleSearch>
        
    )
}
export default Search

