import React from 'react';
import { render } from '@testing-library/react';
import MapaEstado from './MapaEstado';
import { ESTADOS_DA_FEDERACAO } from '../helper/CONSTANTS';

test('Check if MapaEstado is on screen', async () => {
  const estado = ESTADOS_DA_FEDERACAO.rj;

  const { getByAltText } = await render(<MapaEstado estado={estado} />);

  const image = getByAltText(estado.nome);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', `${estado.sigla.toLowerCase()}.png`);
});
