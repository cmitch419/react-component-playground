import styled from 'styled-components';
import { FlexItem } from '../Flex';

const rel = {
  PAST: 'past',
  TODAY: 'today',
  FUTURE: 'future',
};

const StyledDay = styled(FlexItem)`
  border: solid black;
  width: calc(100%/7);
  min-width: 10rem;
  min-height: 10rem;
  z-index: 4000;
  :hover {
    border: solid red;
  }
  ${props => {
    switch(props.relative) {
      case rel.PAST:
        return 'background: grey;'
      case rel.TODAY:
        return 'color: red; text-decoration: underline;'
      default:
        return '';
    }
  }}
`;

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function getRelationToToday(day) {
  const today = new Date();
  if (day.getDate() === today.getDate()) {
    return rel.TODAY;
  } else if (day < today) {
    return rel.PAST;
  } else {
    return rel.FUTURE;
  }
}

const Day = ({day, children, ...rest}) => {
  return (
    <StyledDay relative={getRelationToToday(day)} onDragOver={allowDrop} onDrop={drop} {...rest}>
      <h5>{day.toDateString()}</h5>
      {children}
    </StyledDay>
  );
};

export default Day;
