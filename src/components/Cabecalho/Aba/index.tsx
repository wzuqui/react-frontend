import * as React from 'react';
import Styles, {
  Icone,
  StyledIconButton as IconButtonStyled,
  Titulo
} from './styles';

interface AbaProps {
  titulo: string;
}

const Aba: React.FC<AbaProps> = ({ titulo }) => {
  return (
    <>
      <Styles>
        <Titulo>
          <Icone /> {titulo}
        </Titulo>
        <IconButtonStyled iconProps={{ iconName: 'Cancel' }} />
      </Styles>
      <IconButtonStyled iconProps={{ iconName: 'Add' }} />
    </>
  );
};

export default Aba;
