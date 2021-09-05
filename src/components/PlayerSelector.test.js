import React from 'react';
import { render } from '@testing-library/react';
import PlayerSelector from './PlayerSelector';

test('Combobox PlayerSelector properly returns label', () => {
  const { getByText } = render(<PlayerSelector />);

  expect(getByText('Não Participa')).toBeInTheDocument();
});
