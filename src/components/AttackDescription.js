import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AttackDescription(props) {
  const { playerInfo } = props;

  return (
    <Alert key={playerInfo.id} variant={playerInfo.color.variant}>
      <p>Comandante, é hora do exercito {playerInfo.color.name} atacar!</p>
      <p>
        Selecione um dos seus estados, seu alvo, e quantas guarnições devem
        acatar suas ordens.
      </p>{' '}
    </Alert>
  );
}

export default AttackDescription;
