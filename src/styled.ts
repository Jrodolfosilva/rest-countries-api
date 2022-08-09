import styled from "styled-components"

//header
export const ContainerHeader = styled.div`
padding: 2vh 60px;
border-bottom:2px solid hsl(0, 0%, 93%) ;

a{
    color: white;
    text-decoration: none;
}
`
//Caixa renderizar os paises
export const ContainerRender =styled.ul`
    display: flex;
    align-items:center;
    flex-flow: row wrap;
    gap:5.6vw;
    padding: 0 60px;

` 
//cards que estilizam os paises
export const CardStyle = styled.div`
width:250px ;
height: 240px;
border-radius: 8px;
border:4px solid hsl(0, 0%, 95%) ;
cursor: pointer;
transition: 0.3s;


:hover{
    transform: scale(1.05);
}

img{
    object-fit: cover;
    width: 242px;
    height: 130px;
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
    border:2px solid hsl(0, 0%, 93%);
    border-radius:6px;
    margin:6vh 60px;
    padding:0px 12px;
}
select{
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
}

`
export const ContainerDescription = styled.div`
 display: flex;
 align-items: center;
 background-color: red;


`
export const CardStyleInfoPais = styled.div`
display: flex;
flex-flow: row wrap;
margin: 60px;
align-items: center;
justify-content: space-between;
min-height: 400px;
    img{
        width: 60%;
    }
    

`