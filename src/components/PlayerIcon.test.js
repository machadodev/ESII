import React from 'react';
import { render } from '@testing-library/react';
import PlayerIcon from './PlayerIcon';
import { ARCHETYPE } from '../helper/CONSTANTS';

test('Check if the HumanIcon is rendered', async () => {
  const { getByAltText } = await render(
    <PlayerIcon archetype={ARCHETYPE.HUMAN.value} />,
  );

  const image = getByAltText('Jogador');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'human.png');
});

test('Check if the ArtificialIntelligenceIcon is rendered', async () => {
  const { getByAltText } = await render(
    <PlayerIcon archetype={ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value} />,
  );

  const image = getByAltText('Inteligência Artificial');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'ai.png');
});
