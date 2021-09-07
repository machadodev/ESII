import React from 'react';
import { render } from '@testing-library/react';
import EstadoFederacao from './EstadoFederacao';
// import ESTADOS_DA_FEDERACAO from '../helper/CONSTANTS';

test('Can render component on screen', async () => {
  // const estado = ESTADOS_DA_FEDERACAO.sample(ESTADOS_DA_FEDERACAO);

  const { getByText } = await render(
    <EstadoFederacao nomeEstado="estado.nome" />,
  );

  const estadoTeste = getByText('estado.nome');
  expect(estadoTeste).toBeInTheDocument();
});
