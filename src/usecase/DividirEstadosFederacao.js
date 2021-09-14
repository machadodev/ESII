import { ESTADOS_DA_FEDERACAO } from '../helper/CONSTANTS';

const DividirEstadosFederacao = (n) => {
  const estados = Object.values(ESTADOS_DA_FEDERACAO);

  const shuffled = estados
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const splitToChunks = (array, parts) => {
    const result = [];
    for (let i = parts; i > 0; i -= 1) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  };

  return splitToChunks(shuffled, n);
};

export default DividirEstadosFederacao;
