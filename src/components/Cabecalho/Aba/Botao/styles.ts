import styled from 'styled-components';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

export default styled(IconButton)`
  width: 30px;
  height: 30px;
  padding: 0px;
  border-radius: 0px;
  background-color: transparent;
  &:hover {
    background: ${props => props.theme.cores.neutralPrimary};
    color: ${props => props.theme.cores.white};
  }
  span > i {
    font-size: 12px;
  }
`;
