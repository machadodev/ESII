import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// Botão  WAR
function ButtonWAR(props) {
  const { text, players, disabled } = props;

  return (
    <Link
      to={{
        pathname: '/game',
        state: {
          players,
        },
      }}
      teste="teste"
    >
      <Button
        disabled={disabled}
        style={{ width: '24rem' }}
        className="btn btn-primary btn-lg"
      >
        {text}
      </Button>
    </Link>
  );
}

export default ButtonWAR;
