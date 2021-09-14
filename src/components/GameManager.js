import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Player from './Player';

function GameManager(props) {
  const { match } = props;

  return (
    <div>
      <ListGroup
        as="ul"
        className=""
        key="players"
      >
        {match.players.map((playerInfo) => (
          <Player playerInfo={playerInfo} key={playerInfo.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default GameManager;
