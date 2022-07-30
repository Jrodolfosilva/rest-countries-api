import styled from "styled-components"

//header
export const ContainerHeader = styled.div`
background-color: black;
color: white;
padding: 3vh;


`
//Caixa renderizar os paises
export const ContainerRender =styled.ul`
    display: flex;
    align-items:center;
    flex-flow: row wrap;
    gap:60px;

` 
//cards que estilizam os paises
export const CardStyle = styled.div`
background-color: #2222;
width:270px ;
height: 300px;
border-radius: 8px;

img{
    width: 270px;
    height: 150px;
}

`

//card do search

export const CardStyleSearch = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

input{
    height:38px;
    width:35vw;
    border:0.6px solid red;
    border-radius:4px;
    margin:6vh 60px;
    padding:0px 12px;
}


`