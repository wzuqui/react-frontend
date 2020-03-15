import styled from 'styled-components';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

export const Icone = styled.i`
  padding: 0 8px;
`;

export const Titulo = styled.div`
  flex: 1 1 auto;
  font-size: 12px;
`;

export const StyledIconButton = styled(IconButton)`
  width: 30px;
  height: 30px;
  padding: 0px;
  border-radius: 0px;
  background-color: transparent;
  &:hover {
    background: ${props => props.theme.cores.Secundaria};
    color: ${props => props.theme.cores.Fundo};
  }
  span > i {
    font-size: 12px;
  }
`;

export default styled.div`
  width: 232px;
  height: 30px;
  display: flex;
  min-width: 58px;
  color: ${props => props.theme.cores.Texto};
  background-color: ${props => props.theme.cores.Fundo};
`;
