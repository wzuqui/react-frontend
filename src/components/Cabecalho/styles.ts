import styled from 'styled-components';

export const Espaco = styled.div`
  flex: 1 1 auto;
`;

export const Direita = styled.div`
  color: ${props => props.theme.cores.cabecalho.texto};
  font-size: 12px;
  text-align: right;
  white-space: nowrap;
  font-family: sans-serif;
`;

export const Notificacoes = styled.span``;

export const Nome = styled.div`
  display: inline-block;
  margin: 0px 5px;
`;

export const HierarquiaAtiva = styled.div`
  margin: 0px 5px;
  display: inline-block;
`;

export default styled.header`
  width: 100%;
  display: flex;
  font-size: 22px;
  max-height: 30px;
  line-height: 30px;
  background-color: ${props => props.theme.cores.cabecalho.fundo};
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
`;
