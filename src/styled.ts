import styled from "styled-components"

//header
export const ContainerHeader = styled.div`
background-color: black;
color: white;
padding: 3vh;

a{
    color: white;
    text-decoration: none;
}


`
//Caixa renderizar os paises
export const ContainerRender =styled.ul`
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-flow: row wrap;
    gap:50px;

` 
//cards que estilizam os paises
export const CardStyle = styled.div`
background-color: #2222;
width:250px ;
height: 300px;
border-radius: 8px;


img{
    object-fit: cover;
    width: 250px;
    height: 150px;
    border-radius: 4px 4px 0 0;
}

p{
        font-size: 13px;
}
h3,p{
    padding: 0px 12px;
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