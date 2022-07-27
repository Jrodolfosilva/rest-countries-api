import React,{useState,useEffect} from "react";
import axios from "axios";
import Card from "../components/Card"

export const Home = ()=>{
const params ={}

const [dados,setDados] = useState([]);

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all",{params})
        .then((resp)=>setDados(resp.data))
    },[])

    return(
        <div>
            <ul style={{
                display:"flex",
                flexWrap:"wrap",
                alignItems:"flex-end",
                gap:"60px",
                backgroundColor:"gray"
                
            }}>
                {
                    dados.map((resp)=>(<Card dados={resp}/>))


                }
            </ul>
        </div>
    )
}