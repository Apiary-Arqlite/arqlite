import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "54585B",
    light: " 8F999A",
    brightA: "0091A6", //aquatic
    brightB: "F05125", //orange
    white: "#FFFFFF",
  },
  fonts: ["sans-serif", "Archivo"],
  fontSizes: {
    xxs: "12px", //small caption
    xs: "16px", //p, input, links
    sm: "20px", //h4, button, drop down, download text
    md: "28px", //caption large, h3
    lg: "60px", //h2
    xlg: "100px", //title
  },

  fontWeight: {
    muted: "400",
    regular: "600",
    bold: "700",
  },
};
//Create a Theme component that will render children with all the properties from the Theme provider
const Theme = ({children})=>(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;