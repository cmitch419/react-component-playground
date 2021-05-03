import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  object-fit: fill;
  z-index: 4999;
`;

const Image = ({ ref, src, alt, ...otherProps }) => {
  return (
      <StyledImage ref={ref} src={src} alt={alt} />
  );
};

export default Image;
