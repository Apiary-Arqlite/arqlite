import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

//put all globally used styles here
const GlobalStyle = createGlobalStyle`
body {
    background-color:${({ theme }) => theme.colors.bg} ;
    /* background-color: #f5f5f5; */
    min-height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
    font-family: "Archivo", "Arial", sans-serif;
    color: ${({ theme }) => theme.colors.dark} ;
    /* color: #54585b; */
}

html {
  scroll-behavior: smooth;
}
    

`;
export default GlobalStyle;
