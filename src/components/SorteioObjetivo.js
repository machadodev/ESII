import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AccordionObjetivo from './AccordionObjetivo';

function SorteioObjetivo(props) {
  const { match } = props;

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div>
      <Button
        key="btnObjetivos"
        className="me-2"
        onClick={() => handleShow(true)}
      >
        Mostrar Objetivos
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sorteio de Objetivos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AccordionObjetivo match={match} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SorteioObjetivo;
