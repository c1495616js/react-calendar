import '@/styles/index.scss';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import Calendar from '@/pages/Calendar';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App(): ReactElement {
  return (
    <Container>
      <h1>Simple Calendar</h1>
      <Calendar />
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
