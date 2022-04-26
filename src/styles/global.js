import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  background-color: #afdcec;
  color: #444;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  }

  button { 
  cursor: pointer;
  }
`;
