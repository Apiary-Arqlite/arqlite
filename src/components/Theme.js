import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#54585B",
    light: "#8F999A",
    brightA: "#0091A6", //aquatic
    brightB: "#F05125", //orange
    white: "#FFFFFF",
    bg: "#f5f5f5",
  },

  fontTest: ["12px", "16px", "20px", "24px", "28px", "44px", "52px", "60px", "100px"],
  fontSizes:
    // xxs: "12px",//0 -small caption
    // xs: "16px", //1- p, input, links
    // sm: "20px", //2 - h4, button, drop down, download text
    //unk: "24px", //3 - mobile caplarge
    // md: "28px", //4 - caption large, h3
    // //need 24 px caplarge mobile 44px and 52 px for med q on h2
    //unk1:"44px", //5 - mobile lgh2
    //unk2:"52px", //6 - mobile lgh2
    // lg: "60px", //7 - h2
    // xlg: "100px", //8 - title
    ["12px", "16px", "20px", "24px", "28px", "44px", "52px", "60px", "100px"]
  ,
  fontWeights: {
    muted: "400",
    regular: "600",
    bold: "700",
  },
};
//Create a Theme component that will render children with all the properties from the Theme provider
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
