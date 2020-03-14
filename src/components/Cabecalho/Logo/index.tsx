import * as React from "react";

import Styles from "./styles";

interface ILogoProps {
  src: string;
}

const Logo: React.FC<ILogoProps> = ({ src }) => {
  return <Styles src={src}></Styles>;
};

export default Logo;
