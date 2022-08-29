import { createGlobalStyle } from "styled-components";

export const BREAKPOINTS = {
  SM: '576px',
  MD: '768px',
  LG: '992px',
  XL: '1200px',
  XXL: '1400px',
};

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