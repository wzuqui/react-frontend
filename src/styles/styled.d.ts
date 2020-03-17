import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    titulo: string;
    cores: {
      themePrimary: string;
      themeLighterAlt: string;
      themeLighter: string;
      themeLight: string;
      themeTertiary: string;
      themeSecondary: string;
      themeDarkAlt: string;
      themeDark: string;
      themeDarker: string;
      neutralLighterAlt: string;
      neutralLighter: string;
      neutralLight: string;
      neutralQuaternaryAlt: string;
      neutralQuaternary: string;
      neutralTertiaryAlt: string;
      neutralTertiary: string;
      neutralSecondary: string;
      neutralPrimaryAlt: string;
      neutralPrimary: string;
      neutralDark: string;
      black: string;
      white: string;
      cabecalho: {
        fundo: string;
        texto: string;
        aba: string;
        
      },
      toolbar: {
        background: string;
        button: {
          hover: string;
        }
      }
    };
  }
}
