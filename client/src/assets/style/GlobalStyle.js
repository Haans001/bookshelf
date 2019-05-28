import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Lato', sans-serif;
    src: url('../fonts/Lato-Bold.woff'), url('../fonts/Lato-Light.woff'), url('../fonts/Lato-Regular.woff') format('woff');
    font-weight : bold;
    font-style : normal;
}
html {
    font-size : 62.5%;
}
*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing : antialiased;
    -mos-osx-font-smoothing : grayscale;

}
body {
    font-family :'Lato', sans-serif;
    font-size : 1.6rem;
}

`;

export default GlobalStyle;
