import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Player from './Player';
import DividirEstadosFederacao from '../usecase/DividirEstadosFederacao';
import DistribuirExercito from '../usecase/DistribuirExercito';
import { INITIAL_NUMBER_OF_TROOPS } from '../helper/CONSTANTS';

function GameManager(props) {
  const { match } = props;

  const estadosParticionados = DividirEstadosFederacao(match.players.length);

  match.players = match.players.map((player) => {
    const estadosParticoes = estadosParticionados.shift().map((estado) => ({
      ...estado,
      tropas: INITIAL_NUMBER_OF_TROOPS,
    }));

    return {
      ...player,
      estados: estadosParticoes,
      exercitos: DistribuirExercito(estadosParticoes.length),
    };
  });

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
