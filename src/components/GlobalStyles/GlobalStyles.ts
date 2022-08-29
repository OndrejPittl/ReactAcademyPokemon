import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color: #bc2322;
    //background-color: #dd2120;
  }

  * {
    box-sizing: border-box;
  }
`;