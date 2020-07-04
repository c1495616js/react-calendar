import React from 'react';
import * as dateFns from 'date-fns';
import styled from '@emotion/styled';

// format
const dateFormat = 'd';
const keyFormat = 'd M';
const compareFormat = 'd M y';

// style component
const DayChild = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const isDateEqual: (date1: Date, date2: Date) => boolean = (date1, date2) =>
  dateFns.format(date1, compareFormat) === dateFns.format(date2, compareFormat);

export default function Cell({
  currentDate,
  Day,
  selectedDate,
  setSelectedDate,
}) {
  const monthStart = dateFns.startOfMonth(currentDate);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = dateFns.endOfWeek(monthEnd, { weekStartsOn: 1 });

  const diff = dateFns.differenceInDays(endDate, startDate) + 1;
  const days = Array(diff)
    .fill(null)
    .map((_, index) => {
      const d = dateFns.addDays(startDate, index);
      const key = dateFns.format(d, keyFormat);
      const day = dateFns.format(d, dateFormat);
      return (
        <Day
          key={key}
          isToday={isDateEqual(d, new Date())}
          isSelected={isDateEqual(d, selectedDate)}
          onClick={() => setSelectedDate(d)}>
          <DayChild>{day}</DayChild>
        </Day>
      );
    });
  return <>{days}</>;
}
