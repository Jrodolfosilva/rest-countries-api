import styled from "styled-components"

//header



export const Header = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
line-height: 8vh;
padding: 0 60px;
border-bottom:4px solid hsl(0, 0%, 95%) ;

    div{
        display: flex;
        align-items: center;
        gap:2px;
        font-weight: 700;
        cursor: pointer;
        img{
            width: 20px;
            height: 20px;
            }
    }
    
@media(max-width: 375px) {
    padding: 0px 12px;
    text-align: left;
    font-size: 8px;

}

`
export const Search = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 0 60px;
    margin-top:30px;
        input {
            border:4px solid hsl(0, 0%, 95%);
            width: 350px;
            padding:10px 30px;
            border-radius: 2px;
                    
        }
        select{
            font-size: 12px;
            font-weight: 700;
            padding: 2px 10px;
            border-radius: 2px;
            border:4px solid hsl(0, 0%, 95%) ;
            border: none;
            background-color: #ffff;
            cursor: pointer;

                option{
                    font-weight: 700;
                }
        }
        @media(max-width: 375px) {
            flex-direction: column;
            padding: 0px;
            gap:20px;
                input{
                    margin: 0 auto;    
                    width: 90vw;
                    font-size: 4vw;
                }
                select{
                    width: 40vw;
                    height:36px;
                    margin-left: 5vw;
                }
        }


`

export const CardMain = styled.li`
display: block;
width:250px ;
height: 270px;
border-radius: 8px;
border:4px solid hsl(0, 0%, 95%);
margin-top: 45px;
cursor: pointer;
transition: 0.3s;
    :hover{
        transform: scale(1.05);
    }
    img{
        object-fit: cover;
        width: 242px;
        height: 140px;
        border-radius: 4px 4px 0 0;
    }
    p{
        font-size: 14px;
        font-weight: 600;
    }
    span{
        font-weight: 500;
    }
    h3,p{
    padding: 0px 12px;
    }

`
export const ContainerMain = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 10px 60px;
@media(max-width: 375px) {
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    gap: 30px;
            
}

`
export const ContainerDescription = styled.div`
    padding: 40px 60px;
    input{
        width: 108px;
        padding: 2px;
        margin-bottom: 40px;
        font-weight: 600;
    }
    @media(max-width: 375px) {
    padding: 40px 10vw;
            
}

`
export const CardDescription = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    img{
        width: 500px;
        height: 350px;
    }
    section{
        width: 500px;
        /* background-color: beige; */
        h2{
            margin-bottom: 15px;
        }
    }
    section > div{
        /* background-color: red; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
            p{
                font-weight: 700;
                margin-top: 8px;
                span{
                    margin-left: 6px;
                    font-weight: 600;
                }
            }
        
    }
    span{
        font-weight: 700;
        margin-top: 35px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        /* justify-content: space-between; */
         /* background-color: blue;  */
        gap:20px;
        li{
            display: block;
            list-style: none;
            width: 64px;
            text-align: center;
            font-weight: 600;
            border:4px solid hsl(0, 0%, 95%);
            color:red;
        }
    }
 
    @media(max-width: 375px) {
        img{
            max-width:80vw ;
            height: 40vh;
        }   
        section{
            margin-top: 30px;
        }           
        section > div{
            gap:10px;
        }
        section div ul li {
            margin-top: 12px;
        
        }
}
`