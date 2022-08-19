import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header} from "../styled"
// import moom from "../img/moon.png"
// import sol from "../img/sol.png"


const ComponentHeader = ()=>{
    const [dark, setDark] =  useState(false)
    const darkMod = ()=>{
        setDark(!dark)
        document.querySelector("body")?.classList.toggle("dark")

    }
    
    return(
        <Header className="header">        
        <Link to="/">
            <h2>Where in the world?</h2>
        </Link>
        <div
        onClick={darkMod}
        >
        {/* <img src={dark?sol:moom} alt="troca"/> */}
        <span>
            {
            dark?"Ligth Mode":"Dark Mode"
            }
        </span>
        </div>
        </Header> 
    ) 
}

export default ComponentHeader
        


