import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width || 5}%;
  height: ${props => props.height || 5}%;
  position: absolute;
  margin: 0;
  z-index: 5000;
  border: dotted red;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

export default Wrapper;
