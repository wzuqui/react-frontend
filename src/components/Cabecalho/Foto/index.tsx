import * as React from 'react';

import Styles from './styles';

interface IFotoProps {
  src: string;
}

const Foto: React.FC<IFotoProps> = ({ src }) => {
  return <Styles src={src}></Styles>;
};

export default Foto;
