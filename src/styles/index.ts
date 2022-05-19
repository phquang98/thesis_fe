import { createGlobalStyle } from "styled-components";

import robotoFont from "../assets/Roboto-Regular.ttf";

export const customTheme = {
  light: {
    primary: "#01689b",
    auxiliary: "#00f6ed",
    text: "white"
  },
  defaultFontSize: "16px",
  globalPadding: "4rem", // currently for x-axis
  globalTransition: "200ms"
};

export const GlobalStyles = createGlobalStyle`
  // define the font
  @font-face {
    font-family: randomNameHere;
    src: url(${robotoFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
  }

  body * {
    font-family: randomNameHere;  // use the font
    box-sizing: border-box;
    margin: 0;
  }
`;

// Import the fonts -> declare it with a name (randomNameHere) -> apply it everywhere
// <https://stackoverflow.com/a/55242731/8834000>
// <https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face>
// Check out how MUI create CSSBaseLine: <https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CssBaseline/CssBaseline.js>
// https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
