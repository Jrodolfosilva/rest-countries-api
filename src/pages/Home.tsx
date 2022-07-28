import React,{useState,useEffect} from "react";
import axios from "axios";
import Card from "../components/Card"
import Search from "../components/Search";

export const Home = ()=>{
    type search = string
    const [search,setSearch] = useState<search>()
    const [region,setRegion] = useState("")
    const [dados,setDados] = useState([]);
  
   
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

        console.log(BaseUrl)
    axios.get(BaseUrl)
    .then((resp)=>setDados(resp.data))
    .catch(()=>{
        setDados([])
    })
    },[search])


    return(
        <div>
            <input
             type="search" 
             placeholder={"Pesquisar"}
             onChange={(e)=>setSearch(e.target.value)}
            />
            <ul style={{
                display:"flex",
                padding:"0px 60px",
                flexWrap:"wrap",
                gap:"50px",
                width:"95vw",
                backgroundColor:"#222222"
                
            }}>
                {
                dados.length?
                    dados.map((resp)=>(<Card key={resp.name.common} dados={resp}/>))
                    :
                    <>
                    Carregando...
                    </>
                }
            </ul>
        </div>
    )
}