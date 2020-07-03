import React, { ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  position: relative;
  width: 14.2%;
  padding-top: 14.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  ${(props: any): any =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${(props: any): any =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;

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

export default function Test(): ReactElement {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function getStartDayOfMonth(date: Date) {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDay > 0 ? startDay : 7;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return (
    <Frame>
      {/* Header */}
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>
          Prev
        </Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>
          Next
        </Button>
      </Header>

      {/* Body */}
      <Body>
        {/* Mon, Tue... */}
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}

        {/* days */}
        {Array(days[month] + (startDay - 1)) // calculate how many slots
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day
                key={`day-${index}`}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}>
                <DayChild>{d > 0 ? d : ''}</DayChild>
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}
