import styled from 'styled-components';

const BaseShape = styled.div`
  position: absolute;
  opacity: 50%;
  :hover {
    opacity: 20%;
  }
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
`;

const Circle = styled(BaseShape)`
  background: ${props => props.color || 'red'};
  border-radius: 50%;
`;

const Rectangle = styled(BaseShape)`
  background: ${props => props.color || 'red'};
`;

const Shape = ({ shape, ...props }) => {
  switch (shape) {
    case 'circle':
      return <Circle {...props} />
    case 'rectangle':
      return <Rectangle {...props} />
    default:
      return <Circle {...props} />
  }
};

export default Shape;
