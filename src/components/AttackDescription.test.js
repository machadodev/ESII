import React from 'react';
import { render } from '@testing-library/react';
import AttackDescription from './AttackDescription';
import {
  ARCHETYPE,
  ESTADOS_DA_FEDERACAO,
  PLAYER_MATCH_INFO,
} from '../helper/CONSTANTS';

test('Can render component on screen', async () => {
  const estadoInfo = ESTADOS_DA_FEDERACAO.sp;
  const playerInfo = {
    id: 1,
    color: PLAYER_MATCH_INFO.blue,
    playerType: ARCHETYPE.HUMAN.value,
    estados: [estadoInfo],
  };
  const { getByText } = await render(
    <AttackDescription playerInfo={playerInfo} />,
  );

  const descriptionTest = getByText(
    `Comandante, é hora do exercito ${playerInfo.color.name} atacar!`,
  );
  expect(descriptionTest).toBeInTheDocument();
});
