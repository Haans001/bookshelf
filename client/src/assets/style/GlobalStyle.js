import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    font-size : 62.5%;
}
*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing : antialiased;
    -mos-osx-font-smoothing  : grayscale;

}
body {
    font-family :'Lato', sans-serif;
    font-size : 1.6rem;
    padding : 0;
    margin  :0;
}

`;

export default GlobalStyle;
