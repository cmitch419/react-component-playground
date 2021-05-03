import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getPosition } from '../../utils/dom';

const StyledClickContainer = styled.div`
  width: ${props => props.width};
  height:  ${props => props.height};
  border: dotted red;
  position: relative;
`;

const ClickContainer = ({width, height, children}) => {
  return (
    <StyledClickContainer id="clickyBoi" width={width} height={height}>
      {children}
    </StyledClickContainer>
  )
};

export default ClickContainer;
