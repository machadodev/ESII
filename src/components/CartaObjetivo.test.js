import React from 'react';
import { render } from '@testing-library/react';
import CartaObjetivo from './CartaObjetivo';

test('Check if Card text correctly', async () => {
  const objective = {
    title: 'Consquistar o Sul',
    description: 'Dominar todos os estados da região Sul do Brasil.',
  };

  const { getByText } = await render(<CartaObjetivo objective={objective} />);

  const title = getByText(objective.title);
  expect(title).toBeInTheDocument();

  const desc = getByText(objective.description);
  expect(desc).toBeInTheDocument();
});

test('Check if Card background correctly', async () => {
  const objective = {
    title: '',
    description: '',
  };

  const { getByAltText } = await render(
    <CartaObjetivo objective={objective} />,
  );

  const image = getByAltText('Carta Objetivo');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'carta_objetivo.png');
});
