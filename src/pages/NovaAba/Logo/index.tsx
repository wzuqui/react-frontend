import * as React from 'react';
import styled from 'styled-components';

const LogoComponent: React.FunctionComponent<{
  className?: string;
}> = props => (
  <div className={props.className}>
    <img
      src="http://sistema.ravex.com.br/assets/images/ravex.svg"
      height="100px"
      alt="Ravex"
    />
  </div>
);

export const Logo = styled(LogoComponent)`
  padding-top: 20px;
`;
