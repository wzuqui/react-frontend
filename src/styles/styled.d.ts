import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    titulo: string;
    cores: {
      Destaque: string;
      Borda: string;
      Secundaria: string;
      Terceira: string;

      Fundo: string;
      Texto: string;
      TextoCabecalho: string;
    };
  }
}
