import React from 'react';
import { render } from '@testing-library/react';
import GameMap from './GameMap';

test('Can render component on screen', async () => {
  const location = {
    state: {
      players: [
        {
          value: 'human',
        },
      ],
    },
  };

  const { getByText } = await render(<GameMap location={location} />);

  const descriptionTest = getByText('Atacar');
  expect(descriptionTest).toBeInTheDocument();
});
