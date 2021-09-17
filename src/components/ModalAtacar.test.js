import React from 'react';
import { render } from '@testing-library/react';
import ModalAtacar from './ModalAtacar';

test('Can render component on screen', async () => {
  const { getByText } = await render(<ModalAtacar />);

  const descriptionTest = getByText('Atacar');
  expect(descriptionTest).toBeInTheDocument();
});
