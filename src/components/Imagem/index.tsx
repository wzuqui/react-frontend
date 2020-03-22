import React from 'react';

import Styles from './styles';

interface IImagemProps {
  data: any;
}

const Imagem: React.FC<IImagemProps> = ({ data }) => {
  const semImagem =
    'https://firebasestorage.googleapis.com/v0/b/ravex-169112.appspot.com/o/_nofoto.png?alt=media&token=f65dd169-baf5-4e6b-bd34-118db7a1693d';
  return (
    <Styles>
      <img
        src={data.value || semImagem}
        width="25px"
        height="25"
        alt="Imagem"
      />
    </Styles>
  );
};

export default Imagem;
