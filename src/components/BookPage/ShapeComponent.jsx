import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  opacity: 50%;
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 100}px;
  background: red;
  border-radius: 50%;
  left: calc(${props => props.x || 0}% - ${props => props.width / 2}px);
  top: calc(${props => props.y || 0}% - ${props => props.height / 2}px);
  :hover {
    opacity: 20%;
  }
`;

const Shape = ({ shape, ...props }) => {
  switch (shape) {
    case 'circle':
      return <Circle {...props} />
    default:
      return null;
  }
};

export default Shape;
