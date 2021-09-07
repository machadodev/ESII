import React from 'react';
import { render } from '@testing-library/react';
import EstadoFederacao from './EstadoFederacao';

test('Hello code', async () => {
  const { getByText } = await render(
    <EstadoFederacao nomeEstado="Rio de Janeiro" />,
  );

  const estado = getByText('Rio de Janeiro');
  expect(estado).toBeInTheDocument();
});
