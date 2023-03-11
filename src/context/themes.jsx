import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #0C0B0F;
    --secondary: #A97D36;
    --tertiary: #f0ddbf;
    --light: #f5f3ec;
    --card-shadow: 0px 0px 10px grey;
    --nav-text-size: 1.5rem;
    --nav-text-weight: 600;
    --breakXL: 1280px;
    --breakL: 990px;
    --breakM: 640px;
    --breakSM: 320px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: var(--light);
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