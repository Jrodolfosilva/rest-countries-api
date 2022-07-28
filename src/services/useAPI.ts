import axios from "axios";
import React,{useEffect,useState,useContext} from "react";

const useAPI = (config:string)=>{
const [load,setLoad] = useState(false)
const [error,setError] = useState(null)
const [dados,setDados] = useState([])


useEffect(()=>{

   async function clientAxios({...args}){
    
    setLoad(true)
    const response = await axios(config)
    .then((resp)=>{
        setDados(resp.data)
    })
    .catch((error)=>{
        setError(error)
    })
    .finally(()=>{
        setLoad(!load)
    })
    } 

},[])



    return [load,error,dados]
}
export default useAPI

