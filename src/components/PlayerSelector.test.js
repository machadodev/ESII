import React from 'react';
import { render } from '@testing-library/react';
import PlayerSelector from './PlayerSelector';
import { ARCHETYPE } from '../helper/CONSTANTS';

test('Combobox PlayerSelector properly returns label', () => {
  const { getByText } = render(<PlayerSelector />);

  expect(getByText(ARCHETYPE.NOT_PLAYABLE.label)).toBeInTheDocument();
});
