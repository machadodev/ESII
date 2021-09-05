import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

test('Check if Logo is on screen', async () => {
  const { getByAltText } = await render(<Logo />);

  const image = getByAltText('logo');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'logo.png');
});
