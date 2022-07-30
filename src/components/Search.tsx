import React,{useState,useEffect,useRef, FC, MutableRefObject} from "react";
import axios from "axios";
import {ContainerRender,CardStyleSearch} from "../styled"
import Card from "./Card";


type search = string

const Search = ()=>{
    const [search,setSearch] = useState<search>()
    const [region,setRegion] = useState("")
    const [dados,setDados] = useState([])
    const [load,setLoad] = useState(true)
    const [error,setError] = useState(false)
    const timeoutRef = useRef(0)




    const Debounce = (func:any)=>{
     
    if(search?.length){
        clearTimeout(timeoutRef.current)
    
    timeoutRef.current = setTimeout(()=>{
    return func()
    },1000)
    }
    else{
        func()
    }
    
}


    
    useEffect(()=>{ 
         let config=""
        

         if(!search && !region ||search?.length <= 1 && !region){
            config =`https://restcountries.com/v3/all?fields=name,capital,flags,population,region` 
        }
        else if(search?.length > 1 ||!region){
                config =`https://restcountries.com/v3/name/${search}?fields=name,capital,flags,population,region` 
        }
        else if(region){
            config =`https://restcountries.com/v3/region/${region}?fields=name,capital,flags,population,region`
        }

        Debounce(
        function clientAxios (){
        
        axios.get(config)
        .then((resp)=>{
            setDados(resp.data)
            setError(false)
            
        })
        .catch((error)=>{
            console.log(error)
            setError(true)            
        })
        .finally(()=>{
            setLoad(false)
        })

            }
        )

   
    },[search||region])

const ValidadeSearch= ()=>{
    //retorna a lista de paises com tratamento de erro
    if(load) return <p>Carregando...</p>
    if(error)return <p>OPS!! Algo deu errado...</p>

    if(dados.length){
        return (//div container com todos os paises
            <ContainerRender>
                 {dados.map((resp)=>(<Card key={resp.name.common} dados={resp}/>))} 
            </ContainerRender>
        )
    }
}
    return( //retorno real do componente Search
        <CardStyleSearch>
         {//condiciona o show da barra de Search ao **dados** para não mostrar barra de buscar sem primeiro fazer o get
            dados.length?<div>
                 <input type="search" placeholder="Search for a country..."  onChange={(e)=>setSearch(e.target.value)}
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