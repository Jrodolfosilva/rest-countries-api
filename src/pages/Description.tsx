import React,{useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import {ContainerDescription} from "../styled"

//posso passar o ValidateSearch para a Home/App/Root renderizar e dela passar como element do Route ou procurá usar o useContext 

const Description= ()=>{
    const {region,name} = useParams()
const [pais,setPais] = useState([]);


    
    return(
        <ContainerDescription>
            <input type="button" value="Back"/>
            <div>
                <img src={""} alt={"imagem"}/>
                <div>
                    <h1>{name}</h1>
                    <div>
                        <p>Native Name:<span>{name}</span></p>
                        <p>Population:<span>{"1100000"}</span></p>
                        <p>Region:<span>{region}</span></p>
                        <p>Subregion:<span>{"regionsub"}</span></p>
                        <p>Capital:<span>{name}</span></p>
                    </div>
                </div>
            </div>
        </ContainerDescription>
    )
}

export default Description