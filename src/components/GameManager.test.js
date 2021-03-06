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

  const onPlayerTurn = jest.fn();

  const { getByText } = await render(
    <GameManager match={match} onPlayerTurn={onPlayerTurn} />,
  );

  const player1 = getByText(`Exército ${PLAYER_MATCH_INFO.red.name}`, {
    exact: false,
  });
  const player2 = getByText(`Exército ${PLAYER_MATCH_INFO.green.name}`, {
    exact: false,
  });
  const player3 = getByText(`Exército ${PLAYER_MATCH_INFO.white.name}`, {
    exact: false,
  });
  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(player3).toBeInTheDocument();
});
