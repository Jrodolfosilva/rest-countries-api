import React,{useState,useEffect} from "react";
import Card from "./Card";
import axios from "axios";


const Search = ()=>{
    type search = string
    const [search,setSearch] = useState<search>()
    const [region,setRegion] = useState("")
    const [dados,setDados] = useState([])
    const [load,setLoad] = useState(false)
    const [error,setError] = useState(false)
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
 
    },[search])

const ValidadeSearch= ()=>{
    //retorna a lista de paises com tratamento de erro
    if(load) return <p>Carregando...</p>
    if(error)return <p>Algo não estar certo</p>

    if(dados.length){
        return (//div container com todos os paises
            <div
            style={{
                display:"flex",
                padding:"0px 60px",
                flexWrap:"wrap",
                gap:"50px",
                width:"95vw",
                backgroundColor:""
                
            }}
            > {dados.map((resp)=>(<Card key={resp.name.common} dados={resp}/>))}
            </div>
        )
    }
}
    return( //retorno real do componente Search
        <div>
         {//condiciona o show da barra de Search ao **dados** para não mostrar barra de buscar sem primeiro fazer o get
            dados.length?<div
            style={{
                display:"flex",
                justifyContent:"space-between"
            }}
            >
                 <input type="search" placeholder="Search for a country..."  onChange={(e)=>setSearch(e.target.value)} style={{
                    height:"38px",
                    width:"35vw",
                    border:"0.6px solid red ",
                    borderRadius:"4px",
                    margin:"6vh 60px",
                    padding:"0px 12px",
                    backgroundColor:"red"
                }}
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
        </div>
        
    )
}//renderiza o ValidadeSearch já com as tratativas de erros**pode ser passado para outro componente como props para organizar tipo passa para baixo para um home ou main
export default Search