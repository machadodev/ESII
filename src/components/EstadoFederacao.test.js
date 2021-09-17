import React from 'react';
import { render } from '@testing-library/react';
import EstadoFederacao from './EstadoFederacao';
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
    exercitos: 1,
  };
  const { getByText } = await render(
    <EstadoFederacao estadoInfo={estadoInfo} playerInfo={playerInfo} />,
  );

  const estadoTeste = getByText(`${estadoInfo.sigla} - ${estadoInfo.nome}`);
  expect(estadoTeste).toBeInTheDocument();
});
