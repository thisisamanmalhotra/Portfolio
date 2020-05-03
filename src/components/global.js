import { createGlobalStyle } from "styled-components";
import style from "styled-theming";

const background = style("mode", {
  light: "#eee",
  dark: "#202224",
});

const foreground = style("mode", {
  light: "#202224",
  dark: "#eee",
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${background};
    color: ${foreground};
    transition: 0.2s ease-in-out;
  }

  .card {
    background-color: ${background};
      transition: 0.2s ease-in-out;
  }

  .lmao {
    color: ${foreground};
    transition: 0.2s ease-in-out;
  }
`;

export default GlobalStyle;
