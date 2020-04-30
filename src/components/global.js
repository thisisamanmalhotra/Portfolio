import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#202224" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#cecece" : "#202224")};
    transition: 0.2s ease-in-out;
  }

  .card {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#202224" : "#EEE"};
      transition: 0.2s ease-in-out;
  }

  .lmao {
    color: ${(props) => (props.theme.mode === "dark" ? "#cecece" : "#202224")};
    transition: 0.2s ease-in-out;
  }
`;

export default GlobalStyle;
