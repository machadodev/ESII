import React from 'react';
import { Accordion } from 'react-bootstrap';
import CartaObjetivo from './CartaObjetivo';

function AccordionObjetivo(props) {
  const { match } = props;

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      {match.players.map((playerInfo) => (
        <Accordion key={`objAcc${playerInfo.id}`}>
          <Accordion.Item
            eventKey={`objetivo${playerInfo.color.name}`}
            className={`bg-${playerInfo.color.variant}`}
          >
            <Accordion.Header>
              {`Objetivo do Exército ${playerInfo.color.name}`}
            </Accordion.Header>
            <Accordion.Body>
              <CartaObjetivo objective={playerInfo.objective} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionObjetivo;
