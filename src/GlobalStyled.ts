import {createGlobalStyle} from "styled-components"



// interface ModeTheme {
//     theme:{
//         bgColor:string,
//         textColor:string,
//         borderColor:string
//     }
// }

export const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black /*${(props)=>props.theme.textColor}*/;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
}
html{
    font-size: 14px;
}

body{
    
    background-color: #fff/*${(props)=>props.theme.bgColor}*/;
}
`

/*- Cinza escuro (entrada no modo claro): hsl(0, 0%, 52%)
- Cinza muito claro (fundo do modo claro): hsl(0, 0%, 98%)
- Branco (Texto do modo escuro e elementos do modo claro): hsl(0, 0%, 100%)*/



/*background-color:  hsl(207, 26%, 17%); background-color escuro*/
/*background contaste mais claro hsl (209, 23%, 22%)*/

/*Azul muito escuro (texto em modo claro): hsl(200, 15%, 8%)*/
