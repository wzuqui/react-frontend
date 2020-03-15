import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Styles, { Icone, Titulo } from './styles';

import Botao from './Botao';

interface AbaProps {
  titulo: string;
}

const Aba: React.FC<AbaProps> = ({ titulo }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Styles>
        <Titulo>
          <Icone /> {titulo}
        </Titulo>
        <Botao iconProps={{ iconName: 'Cancel' }} />
      </Styles>
      <Botao cor={theme.cores.TextoCabecalho} iconProps={{ iconName: 'Add' }} />
    </>
  );
};

export default Aba;
