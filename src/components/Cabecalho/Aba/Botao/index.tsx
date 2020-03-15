import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import Styles from './styles';

interface IBotaoProps {
  cor?: string;
  iconProps: IIconProps;
}

const Botao: React.FC<IBotaoProps> = ({ cor, iconProps }) => {
  const theme = useContext(ThemeContext);

  iconProps.className = mergeStyles({
    color: cor || theme.cores.Destaque
  });

  return <Styles color={cor} iconProps={iconProps}></Styles>;
};

export default Botao;
