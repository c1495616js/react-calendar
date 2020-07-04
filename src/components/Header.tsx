import React from 'react';
import styled from '@emotion/styled';
import * as dateFns from 'date-fns';

const dateFormat = 'MMMM yyyy';

const HeaderStyle = styled.div`
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

export default function Header({ currentDate, setCurrentDate }) {
  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  return (
    <>
      <HeaderStyle>
        <Button onClick={prevMonth}>Prev</Button>
        <div>{dateFns.format(currentDate, dateFormat)}</div>
        <Button onClick={nextMonth}>Next</Button>
      </HeaderStyle>
    </>
  );
}
