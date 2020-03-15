import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body , html {
      margin: 0px;
      padding: 0px;
      height: 100%;
      color: ${props => props.theme.cores.Texto};
      background-color: ${props => props.theme.cores.Fundo};
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  #root {
    height: 100%;
    max-height: 100%;
  }
`;
