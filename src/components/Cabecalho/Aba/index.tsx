import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import Styles, { Titulo } from './styles';

import Botao from './Botao';

interface AbaProps {
  icone: string;
  titulo: string;
}

const Aba: React.FC<AbaProps> = ({ titulo, icone }) => {
  const theme = useContext(ThemeContext);

  const className = mergeStyles({
    padding: '0px 8px'
  });

  return (
    <>
      <Styles>
        <Titulo>
          <Icon iconName={icone} className={className + ' ' + icone} /> {titulo}
        </Titulo>
        <Botao iconProps={{ iconName: 'Cancel' }} />
      </Styles>
      <Botao cor={theme.cores.TextoCabecalho} iconProps={{ iconName: 'Add' }} />
    </>
  );
};

export default Aba;
