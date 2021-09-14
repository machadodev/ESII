import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Player from './Player';
import { ESTADOS_DA_FEDERACAO } from '../helper/CONSTANTS';

function GameManager(props) {
  const { match } = props;

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

  const splitted = splitToChunks(shuffled, match.players.length);

  match.players = match.players.map((player) => ({
    ...player,
    estados: splitted.shift(),
    exercito: 0,
  }));

  return (
    <div>
      <ListGroup as="ul">
        {match.players.map((playerInfo) => (
          <Player playerInfo={playerInfo} key={playerInfo.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default GameManager;
