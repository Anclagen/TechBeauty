import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${({ theme }) => theme.color.light};
  }

  #root{
    min-height: 100dvh;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  main{
    margin-top: 90px;
  }
`;

export default GlobalStyle;
