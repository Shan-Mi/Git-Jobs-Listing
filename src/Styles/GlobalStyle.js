import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background: rgb(80,126,177);
  }
  h1 {
    margin: 0;
    padding: 3rem 0 1rem;
    text-align: center;
  }
  h2 {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: midnightblue;
    &:hover {
      color: purple;
    }
  }
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    &:hover {
      background-color: #1ED5B9;
      transition: background-color 100ms ease-in-out;
    }
    transition: background-color 100ms ease-in-out;
  }
`;
