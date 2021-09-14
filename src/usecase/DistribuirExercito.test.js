import DistribuirExercito from './DistribuirExercito';

describe('DistribuirExercito test', () => {
  const arr = [
    {
      number_of_territories: 7,
      number_of_armies: 3,
    },
    {
      number_of_territories: 8,
      number_of_armies: 4,
    },
    {
      number_of_territories: 15,
      number_of_armies: 7,
    },
  ];

  arr.forEach((elem) => {
    it(`should return ${elem.number_of_armies} armies when ${elem.number_of_territories} territories are given`, async () => {
      expect(DistribuirExercito(elem.number_of_territories)).toBe(
        elem.number_of_armies,
      );
    });
  });
});
