import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Check if app can render inner component', async () => {
  const { getByText } = await render(<App />);

  const app = getByText('Jogar');
  expect(app).toBeInTheDocument();
});
