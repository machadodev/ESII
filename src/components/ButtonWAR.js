import React from 'react';
import Button from 'react-bootstrap/Button';

// or less ideally
function ButtonWAR(props) {
  const { text, disabled } = props;
  return (
    <Button disabled={disabled} style={{ width: '24rem' }} className="btn btn-primary btn-lg">
      {text}
    </Button>
  );
}

export default ButtonWAR;
