import styled from 'styled-components';

const FlexTopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const FlexContainer = styled.div`
  border: dotted red;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const FlexItem = styled.div`
  flex-grow: 0;
`;

export {
  FlexTopContainer,
  FlexContainer,
  FlexItem,
};
