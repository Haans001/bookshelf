import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing : antialiased;
    -mos-osx-font-smoothing  : grayscale;

}
body {
    font-family :'Lato', sans-serif;
    padding : 0;
    margin  :0;  
}

`;

export default GlobalStyle;
