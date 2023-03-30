import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.color.light};
  }

  #root{
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  main{
    margin-top: 90px;
  }
`;

export default GlobalStyle;
