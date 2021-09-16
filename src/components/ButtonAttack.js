import React from 'react';
import Button from 'react-bootstrap/Button';
import { TXT_BTN_ATTACK } from '../helper/CONSTANTS';

// Botão  WAR
function ButtonAttack(props) {
  const { variant, disabled } = props;

  return (
    <Button
      disabled={disabled}
      style={{ width: '24rem' }}
      className="btn btn-primary btn-lg"
      variant={variant}
    >
      {TXT_BTN_ATTACK}
    </Button>
  );
}

export default ButtonAttack;
