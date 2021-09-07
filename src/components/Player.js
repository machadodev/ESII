import React from 'react';

function Player(props) {
  const { color } = props;

  return (
    <li className="alert alert-primary">
      {/* TODO: Add EstadoFederacao */}
      <p>Player {color}</p>
    </li>
  );
}

export default Player;
