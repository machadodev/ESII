import React from 'react';
import { render } from '@testing-library/react';
import GameManager from './GameManager';
import { PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

test('Check if Game Manager can render multiple players', async () => {
  const match = {
    players: [
      { id: 1, color: PLAYER_MATCH_INFO.red, playerType: 'human' },
      { id: 2, color: PLAYER_MATCH_INFO.green, playerType: 'ia' },
      { id: 3, color: PLAYER_MATCH_INFO.white, playerType: 'ia' },
    ],
  };
  const { getByText } = await render(<GameManager match={match} />);

  const player = getByText(`Exército ${PLAYER_MATCH_INFO.red.name}`);
  expect(player).toBeInTheDocument();
});
