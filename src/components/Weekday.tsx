import React from 'react';
import * as dateFns from 'date-fns';

const dateFormat = 'EEE';

export default function Weekday({ Day }) {
  const startDate = dateFns.startOfWeek(new Date(), { weekStartsOn: 1 });
  return (
    <>
      {Array(7)
        .fill(null)
        .map((_, index) => {
          const weekday = dateFns.format(
            dateFns.addDays(startDate, index),
            dateFormat,
          );
          return <Day key={weekday}>{weekday}</Day>;
        })}
    </>
  );
}
