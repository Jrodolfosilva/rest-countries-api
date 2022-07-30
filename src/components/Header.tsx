import React from "react";
import { ContainerHeader} from "../styled"
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <ContainerHeader>        
        <Link to="/">
            <h2>Where in the world?</h2>
        </Link>
        </ContainerHeader> 
    ) 
}

export default Header