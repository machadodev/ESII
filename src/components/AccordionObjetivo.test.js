import React from 'react';
import { render } from '@testing-library/react';
import AccordionObjetivo from './AccordionObjetivo';
import { OBJECTIVES, PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

test('Check if AccordionObjetivo card render correctly', async () => {
  const match = {
    players: [
      {
        id: 1,
        color: PLAYER_MATCH_INFO.red,
        archetype: 'human',
        objective: OBJECTIVES.sul,
      },
    ],
  };
  const { getByText } = await render(<AccordionObjetivo match={match} />);

  const player = getByText(
    `Objetivo do Exército ${match.players[0].color.name}`,
  );
  expect(player).toBeInTheDocument();
});

// TODO: A quantidade de players em match bate com o total de objetivos
