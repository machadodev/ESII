import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';

test('Check if button has text', async () => {
  const color = 'green';
  const { getByText } = await render(<Player color={color} />);

  const player = getByText(`Player ${color}`);
  expect(player).toBeInTheDocument();
});
