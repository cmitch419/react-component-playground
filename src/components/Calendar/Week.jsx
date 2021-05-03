import styled from 'styled-components';
import { FlexItem } from '../Flex';
import Day from './Day';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const getDaysOfWeek = (refDate=new Date(), startDayOfWeek=0) => {
  const startOfWeek = new Date(refDate.getTime() - (refDate.getDay() - startDayOfWeek) * MS_PER_DAY);
  const daysOfWeek = Array.from(Array(7), (_,i) => new Date(startOfWeek.getTime() + i * MS_PER_DAY));
  return daysOfWeek;
};

const StyledWeek = styled(FlexItem)`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
`;

const Week = ({ startDate, startDayOfWeek, children, ...rest }) => {
  startDate = startDate || new Date();
  startDate.setDate(startDate.getDate());
  const days = getDaysOfWeek(startDate,startDayOfWeek);
  return (
    <StyledWeek {...rest}>
      { days && days.map((day) => <Day key={day.toDateString()} day={day} /> )}
      {children}
    </StyledWeek>
  );
};

export default Week;
