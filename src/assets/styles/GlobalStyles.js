import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* font-family: 'Roboto', sans-serif;
font-family: 'Roboto Slab', serif; */
/* font-family: 'Commissioner', sans-serif; */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    color:#151619;
    font-size:10px;

}
*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}
body{
    font-family: 'Roboto', sans-serif;
    font-size:10px;
    box-sizing:border-box
}
a,button,input{
    font-family:'Roboto', sans-serif;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;
