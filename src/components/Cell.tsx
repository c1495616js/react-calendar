import React from 'react';
import * as dateFns from 'date-fns';

const dateFormat = 'EEE';

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
  const dateFormat = 'd';
  const keyFormat = 'd M';
  const diff = dateFns.differenceInDays(endDate, startDate) + 1;
  const days = Array(diff)
    .fill(null)
    .map((_, index) => {
      const key = dateFns.format(dateFns.addDays(startDate, index), keyFormat);
      const day = dateFns.format(dateFns.addDays(startDate, index), dateFormat);
      return <Day key={key}>{day}</Day>;
    });
  return <>{days}</>;
}
