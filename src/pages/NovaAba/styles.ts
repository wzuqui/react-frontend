import styled from 'styled-components';

export const Centralizar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

export const Categoria = styled.div`
  width: 750px;
  margin: auto;
  padding: 20px;
  margin-top: 10px;
`;

export const CategoriaTitulo = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: left;
`;

export const TileItem = styled.div`
  cursor: pointer;
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-flow: column;
  color: ${props => props.theme.cores.neutralPrimary};
`;

export const TileItemNome = styled.div`
  font-size: 14px;
  font-weight: 400;
  align-self: center;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  top: 10%;
  max-height: 46px;
  transform: translateY(-50%);
`;

export const TileItemBotoes = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: space-between;
`;

export const TileIcone = styled.div`
  align-self: center;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  top: 10%;
  max-height: 46px;
  transform: translateY(-50%);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40px;
  grid-template-rows: 50% 50%;
  grid-template-areas: 'icone nome' 'icone descricao';
`;

export const Icone = styled.div`
  font-size: 23px;
  grid-area: icone;
`;

export const Nome = styled.div`
  grid-area: nome;
  font-size: 13px;
`;

export const Descricao = styled.div`
  color: ${props => props.theme.cores.neutralPrimaryAlt};
  font-size: 10px;
  grid-area: descricao;
`;

export default styled.div`
  text-align: center;
`;
