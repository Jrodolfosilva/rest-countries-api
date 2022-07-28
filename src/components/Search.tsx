import React,{useState,useEffect} from "react";
import { Home } from "../pages/Home";
import useAPI from "../services/useAPI";

const [load,error,dados] = useAPI("")


const Search = ()=>{
    type search = string
    const [search,setSearch] = useState<search>()
    const [region,setRegion] = useState("")


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

        useAPI(BaseUrl)
//enviar os parametros/ BaseUrl para o useAPI e retornar os dados e passar para o home e nele passar para os demais. 
    },[search])


    return(
        <div>
        <div
        style={{
            display:"flex",
            justifyContent:"space-between"
        }}
        >
             <input
             type="search" 
             placeholder={"Search for a country..."}
             onChange={(e)=>setSearch(e.target.value)}
             style={{
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
        </div>
            <Home/>
        </div>
    )
}
export default Search