import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Player from './Player';
import DividirEstadosFederacao from '../usecase/DividirEstadosFederacao';

function GameManager(props) {
  const { match } = props;

  const estadosParticionados = DividirEstadosFederacao(match.players.length);

  match.players = match.players.map((player) => ({
    ...player,
    estados: estadosParticionados.shift(),
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
