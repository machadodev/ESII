import React from 'react';
import { render } from '@testing-library/react';
import SorteioObjetivo from './SorteioObjetivo';
import { OBJECTIVES, PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

test('Check if Button render correctly', async () => {
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
  const { getByText } = await render(<SorteioObjetivo match={match} />);

  const button = getByText('Mostrar Objetivos');
  expect(button).toBeInTheDocument();
});

// TODO: Testar click no botão
// TODO: Testar abertura do modal
