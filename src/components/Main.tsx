import React,{useState,useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import {Search,ContainerMain } from "../styled"

interface Pais {
    name:{
        common:String
    },
    capital:String,
    flags: Object,
    region:String,
    population:String
}

const Main = ()=>{
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
            <ContainerMain>
                {response.map((resp)=>(<Card key={resp.name} dados={resp}/>))} 
            </ContainerMain>:[]}
        {error?<>Error</>:[]}    
        </>
    )
}
    return( //retorno real do componente Search
        <div>
         {
            dados.length?
            <Search>
                 <input type="search" placeholder="Search for a country..."  onChange={(e)=>setSearch(e.target.value)}               
                />
                {region && search?<>Filtro desativado..::teste::..</>:[]}
                <select value={region} onChange={(e)=>setRegion(e.target.value)}  id="regions" >
                    <option value="" disabled>Filter by Region</option>
                    {/* <option value="">All</option> */}
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europa</option>
                    <option value="oceania">Oceania</option>
                </select>
            </Search>: null
         }
        
        <div>
            <RenderSearch/>
        </div>
        
        </div>
        
    )
}
export default Main

