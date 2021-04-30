import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import debounce from 'debounce';

const StyledBookPage = styled.div`
  position: relative;
  height: ${props => props.height}px;
  img {
    position: absolute;
    width: 100%;
    height: auto;
  }
`;

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

const Shape = ({ shape, ...props}) => {
  switch(shape) {
    case 'circle':
      return <Circle {...props} />
    default:
      return null;
  }
};

const AudioComponent = ({ src, targetId }) => {
  const myAudioElement = new Audio(src);
  myAudioElement.addEventListener("canplaythrough", () => {
    document.getElementById(targetId).onclick = () => myAudioElement.play();
  });
  return null;
};

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
              return <Shape key={component.id} {...component} />
            case 'audio':
              return <AudioComponent key={component.id} {...component} />
            default:
              break;
          }
          return;
        })}
      </StyledBookPage>
    </>
  );
};

export default BookPage;
