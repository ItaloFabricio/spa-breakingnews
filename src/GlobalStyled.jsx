import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    text-decoration: none;
    list-style: none;
    font-family: "Lexend Deca", sans-serif;
    
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "Lexend Deca", sans-serif;
    background-color: #F9F9F9;
  }

`;
