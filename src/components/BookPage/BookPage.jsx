import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import debounce from 'debounce';

const StyledBookPage = styled.div`
  position: relative;
  img {
    position: absolute;
  }
`;

const Shape = styled.div`
  position: absolute;
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 100}px;
  background: red;
  border-radius: 50%;
  transform: translate(${props => props.x || 0}px, ${props => props.y || 0}px);
`;

const BookPage = ({ image, caption, text, components }) => {
  const imgEl = useRef(null);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  useEffect(() => {
    const updateDimensions = debounce(() => {
      if (imgEl.current) {
        setDimensions({
          width: imgEl.current.offsetWidth,
          height: imgEl.current.offsetHeight,
        })
      }
    }, 50);
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <>
      <span>
        {JSON.stringify(dimensions)}
      </span>
      <StyledBookPage>
        <img ref={imgEl} src={image} alt={caption} />
        { components && components.filter((item) => item.type === 'shape').map(shape => (
          <Shape {...shape}/>
        ))}
      </StyledBookPage>
    </>
  );
};

export default BookPage;
