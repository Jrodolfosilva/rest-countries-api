import React,{useState,useEffect,useRef, FC, MutableRefObject} from "react";
import axios from "axios";
import {ContainerRender,CardStyleSearch} from "../styled"
import Card from "./Card";



const Search = ()=>{
    type search = string
    const [search,setSearch] = useState<search>()
    const [region,setRegion] = useState("")
    const [dados,setDados] = useState([])
    const [load,setLoad] = useState(false)
    const [error,setError] = useState(false)
    const timeoutRef = useRef(0)


const Debounce = (func:any)=>{

    clearTimeout(timeoutRef.current)
    
    timeoutRef.current = setTimeout(()=>{
    return func()
},1000)

}


    
    useEffect(()=>{ 
        const config = {
            base:"https://restcountries.com/v3.1/",
            route:"all",
            region: ""
        }
        

        if(search?.length){
            config.region = ""
            config.route =`name/${search}`
        } 
        else if(region.length){
            config.route = ""
            config.region=`region/${region}`
        } 
        else if(search?.length && region.length){
            config.region = ""
        }
        
        const BaseUrl =`${config.base}${config.region}${config.route}` 



        Debounce(
        function clientAxios (){
            setLoad(true)
        axios.get(BaseUrl)
        .then((resp)=>{
            setDados(resp.data)
            
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

     
        
    },[search])

const ValidadeSearch= ()=>{
    //retorna a lista de paises com tratamento de erro
    if(load) return <p>Carregando...</p>
    if(error)return <p>Algo não estar certo</p>

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
                <select>
                    <option value="null">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europa">Europa</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>: null
         }
        
        <div><ValidadeSearch/></div>
        </CardStyleSearch>
        
    )
}//renderiza o ValidadeSearch já com as tratativas de erros**pode ser passado para outro componente como props para organizar tipo passa para baixo para um home ou main
export default Search