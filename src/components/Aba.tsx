import * as React from 'react';
import styled from "styled-components";
import { IconButton } from 'office-ui-fabric-react/lib/Button';

import { ColorPrimary, ColorSecondary } from '../styles';

const Icone = styled.i`
  padding: 0 8px;
`;

const Titulo = styled.div`
  flex: 1 1 auto;
  font-size: 12px;
`;

const StyledIconButton = styled(IconButton)`
  width: 30px;
  height: 30px;
  padding: 0px;
  border-radius: 0px;
  background-color: transparent;
  &:hover {
    background: ${ColorSecondary};
    color: #fff;
  }
  span > i {
    font-size: 12px;
  }
`;

class AbaComponent extends React.Component<{ className?: string, titulo: string }, {}> {
  render() {
    const { className, titulo } = this.props;

    return (
      <>
        <div className={className}>
          <Titulo>
            <Icone /> {titulo}
          </Titulo>
          <StyledIconButton iconProps={{ iconName: 'Cancel' }} />
        </div>
        <StyledIconButton iconProps={{ iconName: 'Add' }} />
      </>
    );
  }
}

export const Aba = styled(AbaComponent)`
  width: 232px;
  height: 30px;
  display: flex;
  min-width: 58px;
  color: ${ColorPrimary};
  background-color: #FFF;
`;