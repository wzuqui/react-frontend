import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const LogoComponent: React.FunctionComponent<{
  className?: string;
}> = props => {
  const theme = useContext(ThemeContext);

  const src =
    theme.titulo === 'light'
      ? 'http://sistema.ravex.com.br/assets/images/ravex.svg'
      : 'http://sistema.ravex.com.br/assets/images/logo-no-text-prod.svg';

  return (
    <div className={props.className}>
      <img width="310px" alt="Ravex" src={src} />
    </div>
  );
};

export const Logo = styled(LogoComponent)`
  padding-top: 20px;
`;
