import DividirEstadosFederacao from './DividirEstadosFederacao';
import {
  MIN_PLAYERS_TO_START_GAME,
  MAX_PLAYERS_IN_SESSION,
} from '../helper/CONSTANTS';

describe('DividirEstadosFederacao test', () => {
  for (let n = MIN_PLAYERS_TO_START_GAME; n <= MAX_PLAYERS_IN_SESSION; n += 1) {
    it(`should divide the array in ${n} parts`, async () => {
      expect(DividirEstadosFederacao(n)).toHaveLength(n);
    });
  }

  it('should divide in 3 arrays of size 9, 9 and 8', async () => {
    const n = 3;

    expect(
      DividirEstadosFederacao(n).map((partition) => partition.length),
    ).toStrictEqual([9, 9, 8]);
  });
});
