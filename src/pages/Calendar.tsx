import React, { ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Header from '@/components/Header';
import Weekday from '@/components/Weekday';
import Cell from '@/components/Cell';

const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
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

export default function Calendar(): ReactElement {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Frame>
      {/* Header */}
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />

      {/* Body */}
      <Body>
        <Weekday Day={Day} />
        <Cell
          currentDate={currentDate}
          Day={Day}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Body>
    </Frame>
  );
}
