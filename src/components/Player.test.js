import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';
import { PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

test('Check if Player card render correctly', async () => {
  const playerInfo = {
    id: 1,
    color: PLAYER_MATCH_INFO.red,
    playerType: 'human',
  };
  const { getByText } = await render(<Player playerInfo={playerInfo} />);

  const player = getByText(`Exército ${playerInfo.color.name}`);
  expect(player).toBeInTheDocument();
});
