import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Carregando: React.FC<{}> = props => {
  const theme = useContext(ThemeContext);

  const cores = theme.cores;

  const className = mergeStyles({
    selectors: {
      '.ms-ProgressIndicator-progressBar': {
        background: `linear-gradient(to right, rgb(237, 235, 233) 0%, ${cores.Destaque} 50%, rgb(237, 235, 233) 100%)`
      },
      '.ms-ProgressIndicator-itemDescription': {
        color: cores.Texto
      }
    }
  });

  return (
    <ProgressIndicator description="Carregando..." className={className} />
  );
};

export default Carregando;
