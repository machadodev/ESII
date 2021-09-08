import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Player(props) {
  const { playerInfo } = props;

  return (
    <ListGroup.Item
      as="li"
      variant={playerInfo.color.variant}
      key={playerInfo.uid}
    >
      {/* TODO: Add EstadoFederacao */}
      <p key={playerInfo.color.index.toString()}>
        Exército {playerInfo.color.name}
      </p>
    </ListGroup.Item>
  );
}

export default Player;
