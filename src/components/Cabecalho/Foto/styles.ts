import styled from 'styled-components';

export interface IFotoProps {
  src?: string;
}

export default styled.div<IFotoProps>`
  background-image: url(${props => props.src});
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-size: cover;
  margin: 1.5px 5px;
  display: inline-block;
  vertical-align: top;
`;
