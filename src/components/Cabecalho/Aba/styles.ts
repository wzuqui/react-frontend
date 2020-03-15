import styled from 'styled-components';

export const Icone = styled.i`
  padding: 0 8px;
`;

export const Titulo = styled.div`
  flex: 1 1 auto;
  font-size: 12px;
`;

export default styled.div`
  width: 232px;
  height: 30px;
  display: flex;
  min-width: 58px;
  color: ${props => props.theme.cores.Texto};
  background-color: ${props => props.theme.cores.Fundo};
`;
