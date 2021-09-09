import React from 'react';
import { render } from '@testing-library/react';
import MapaBrasil from './MapaBrasil';

test('Can render component on screen', async () => {
  const { getByAltText } = await render(<MapaBrasil />);

  const image = getByAltText('Mapa do Brasil');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'mapa_brasil.png');
});
