import React from 'react';

import Styles from './styles';

interface IImagemProps {
  data: any;
}

const Imagem: React.FC<IImagemProps> = ({ data }) => {
  return (
    <Styles>
      <img src={data.value} width="25px" height="25" alt="Imagem" />
    </Styles>
  );
};

export default Imagem;
