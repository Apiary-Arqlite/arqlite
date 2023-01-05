import { createGlobalStyle } from "styled-components";

//put all globally used styles here
const GlobalStyle = createGlobalStyle`
body {
    background-color:${({ theme }) => theme.colors.bg} ;
    min-height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
    font-family: "Archivo", "Arial", sans-serif;
    color: ${({ theme }) => theme.colors.dark} ;

}

html {
  scroll-behavior: smooth;
}
    

`;
export default GlobalStyle;
