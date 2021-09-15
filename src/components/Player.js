import React from 'react';
import { Container, Col, ListGroup, Row } from 'react-bootstrap';
import PlayerIcon from './PlayerIcon';
import EstadoFederacao from './EstadoFederacao';

function Player(props) {
  const { playerInfo } = props;

  return (
    <ListGroup.Item as="li" variant={playerInfo.color.variant}>
      <Container>
        <Row className="py-2">
          <Col xs={3} className="play-icon" align="right">
            <PlayerIcon archetype={playerInfo.archetype} />
          </Col>
          <Col xs={9}>
            Exército {playerInfo.color.name} - <b>{playerInfo.exercitos}</b>{' '}
            tropa(s)
          </Col>
        </Row>
        <Row>
          {playerInfo.estados.map((estadoInfo) => (
            <Col xs={12} key={estadoInfo.idEstado}>
              <EstadoFederacao
                estadoInfo={estadoInfo}
                playerInfo={playerInfo}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

export default Player;
