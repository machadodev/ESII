import React from 'react';
import { render } from '@testing-library/react';
import GameManager from './GameManager';

test('Check if button has text', async () => {
  const players = 3;
  const { getByText } = await render(<GameManager players={players} />);

  const player = getByText(`GameManager com ${players} jogadores`);
  expect(player).toBeInTheDocument();
});
