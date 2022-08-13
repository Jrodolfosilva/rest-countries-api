import React from "react";
import { Link } from "react-router-dom";
import { Header} from "../styled"
import moom from "../img/moon.png"


const ComponentHeader = ()=>{
    return(
        <Header>        
        <Link to="/">
            <h2>Where in the world?</h2>
        </Link>
        <div>
        <img src={moom} alt="troca"/>
        <span>Dark Mode</span>
        </div>
        </Header> 
    ) 
}

export default ComponentHeader