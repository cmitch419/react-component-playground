import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import debounce from 'debounce';

import AudioComponent from './AudioComponent';
import ShapeComponent from './ShapeComponent';

const StyledBookPage = styled.div`
  position: relative;
  height: ${props => props.height}px;
  img {
    position: absolute;
    width: 100%;
    height: auto;
  }
`;

const BookPage = ({ image, caption, text, components }) => {
  const imgEl = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
      <StyledBookPage {...dimensions} >
        <img
          ref={imgEl}
          src={image}
          alt={caption}
          onLoad={() =>
            setDimensions({
              width: imgEl.current.offsetWidth,
              height: imgEl.current.offsetHeight,
            })}
        />
        {components && components.map((component) => {
          switch (component.type) {
            case 'shape':
              return <ShapeComponent key={component.id} {...component} />
            case 'audio':
              return <AudioComponent key={component.id} {...component} />
            default:
              return null;
          }
        })}
      </StyledBookPage>
    </>
  );
};

export default BookPage;
