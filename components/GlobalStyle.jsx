import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-size: 62.5%; 
    word-break: keep-all;
    font-family: "IPAexゴシック";
    @media(max-width: 1150px) {
      font-size: 57%;
    }
    @media(max-width: 900px) {
      font-size: 55%;
    }
    @media(max-width: 700px) {
      font-size: 50%;
    }

    @media(max-width: 700px) {
      font-size: 45%;
    }
  }
`;

export default GlobalStyle;
