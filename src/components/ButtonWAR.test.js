import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ButtonWAR from './ButtonWAR';

test('Check if button has text', async () => {
  const { getByText } = await render(
    <BrowserRouter>
      <ButtonWAR text="OK" />
    </BrowserRouter>,
  );

  const button = getByText('OK');
  expect(button).toBeInTheDocument();
});
