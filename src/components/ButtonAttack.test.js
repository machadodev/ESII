import React from 'react';
import { render } from '@testing-library/react';
import ButtonAttack from './ButtonAttack';
import { TXT_BTN_ATTACK } from '../helper/CONSTANTS';

test('Can render component on screen', async () => {
  const { getByText } = await render(
    <ButtonAttack variant="primary" disabled={false} />,
  );

  const descriptionTest = getByText(TXT_BTN_ATTACK);
  expect(descriptionTest).toBeInTheDocument();
});
