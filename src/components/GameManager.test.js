import React from 'react';
import { render } from '@testing-library/react';
import GameManager from './GameManager';
import { ARCHETYPE, PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

test('Check if Game Manager can render multiple players', async () => {
  const match = {
    players: [
      {
        id: 1,
        color: PLAYER_MATCH_INFO.red,
        playerType: ARCHETYPE.HUMAN.value,
      },
      {
        id: 2,
        color: PLAYER_MATCH_INFO.green,
        playerType: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value,
      },
      {
        id: 3,
        color: PLAYER_MATCH_INFO.white,
        playerType: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value,
      },
    ],
  };
  const { getByText } = await render(<GameManager match={match} />);

  const player1 = getByText(`Exército ${PLAYER_MATCH_INFO.red.name}`);
  const player2 = getByText(`Exército ${PLAYER_MATCH_INFO.green.name}`);
  const player3 = getByText(`Exército ${PLAYER_MATCH_INFO.white.name}`);
  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(player3).toBeInTheDocument();
});
