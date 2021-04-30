import styled from 'styled-components';

const PositionedShape = styled.div`
  position: absolute;
  opacity: 50%;
  :hover {
    opacity: 20%;
  }
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 100}px;
  left: calc(${props => props.x || 0}% - ${props => props.width / 2}px);
  top: calc(${props => props.y || 0}% - ${props => props.height / 2}px);
`;

const Circle = styled(PositionedShape)`
background: red;
  border-radius: 50%;
`;

const Rectangle = styled(PositionedShape)`
  background: red;
`;

const Triangle = styled(PositionedShape)`
  width: 0;
  height: 0;
  border-left: ${props => props.width/2 || 50}px solid transparent;
  border-right: ${props => props.width/2 || 50}px solid transparent;
  border-top: ${props => props.height || 100}px solid red;
`;


const Shape = ({ shape, ...props }) => {
  switch (shape) {
    case 'circle':
      return <Circle {...props} />
    case 'rectangle':
      return <Rectangle {...props} />
    case 'triangle':
      return <Triangle {...props} />
    default:
      return null;
  }
};

export default Shape;
