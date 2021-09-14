import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';
import {
  ARCHETYPE,
  PLAYER_MATCH_INFO,
  MAX_PLAYERS_IN_SESSION,
  ESTADOS_DA_FEDERACAO,
} from '../helper/CONSTANTS';

test('Check if Player card render correctly', async () => {
  const estadoInfo = ESTADOS_DA_FEDERACAO.sp;
  const playerInfo = {
    id: MAX_PLAYERS_IN_SESSION - 1,
    color: PLAYER_MATCH_INFO.black,
    archetype: ARCHETYPE.HUMAN.value,
    estados: [estadoInfo],
  };
  const { getByText } = await render(<Player playerInfo={playerInfo} />);

  const player = getByText(`Exército ${playerInfo.color.name}`);
  expect(player).toBeInTheDocument();
});
