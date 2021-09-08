import React from 'react';
import { render } from '@testing-library/react';
import PlayerIcon from './PlayerIcon';

test('Check if correct PlayerIcon can render human icon', async () => {
  const { getByAltText } = await render(<PlayerIcon archetype="human" />);

  const image = getByAltText('Jogador');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'human.png');
});

test('Check if correct PlayerIcon can render ai icon', async () => {
  const { getByAltText } = await render(<PlayerIcon archetype="ai" />);

  const image = getByAltText('Inteligência Artificial');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'ai.png');
});
