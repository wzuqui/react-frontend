import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { useHistory } from "react-router-dom";

import Styles, { Titulo } from './styles';

import Botao from './Botao';

interface AbaProps {
  icone: string;
  titulo: string;
}

const Aba: React.FC<AbaProps> = ({ titulo, icone }) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();

  const className = mergeStyles({
    padding: '0px 8px'
  });

  const fecharHandler = () => {
    history.push('/');
  }
  const novaAbahandler = () => {
    window.open(window.location.origin);
  }

  return (
    <>
      <Styles>
        <Titulo>
          <Icon iconName={icone} className={className + ' ' + icone} /> {titulo}
        </Titulo>
        <Botao iconProps={{ iconName: 'Cancel' }} onClick={fecharHandler}  />
      </Styles>
      <Botao cor={theme.cores.neutralPrimary} iconProps={{ iconName: 'Add' }} onClick={novaAbahandler} />
    </>
  );
};

export default Aba;
