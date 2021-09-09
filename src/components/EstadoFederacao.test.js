import React from 'react';
import { render } from '@testing-library/react';
import EstadoFederacao from './EstadoFederacao';
import { ESTADOS_DA_FEDERACAO, PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

test('Can render component on screen', async () => {
  const estadoInfo = {
    estado: ESTADOS_DA_FEDERACAO.sp,
    exercitos: 4,
  };
  const playerInfo = {
    id: 1,
    color: PLAYER_MATCH_INFO.red,
    playerType: 'human',
  };
  const { getByText } = await render(
    <EstadoFederacao estadoInfo={estadoInfo} playerInfo={playerInfo} />,
  );

  const estadoTeste = getByText(
    `${estadoInfo.estado.sigla} - ${estadoInfo.estado.nome}`,
  );
  expect(estadoTeste).toBeInTheDocument();
});
