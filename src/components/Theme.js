import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#54585B",
    light: "#8F999A",
    extralight:"#DFDFDF",//light text on gray
    brightA: "#0091A6", //aquatic
    brightB: "#F05125", //orange
    white: "#FFFFFF",
    bg: "#f5f5f5",
    hover:"f3f3f3",//hover on calculator form
  },

  fontSizes: {
    3: "12px", //0-small caption
    4: "16px", //1 - p, input, links
    5: "20px", //2 - h4, button, drop down, download text
    6: "24px", //3 - mobile caption large
    7: "28px", //4 - caption large, h3
    10:"40px", //calculator values
    11: "44px", //5 - mobile h2
    13: "52px", //6 - mobile h2
    15: "60px", //7 - h2
    25: "100px", //8 - title
  },
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
