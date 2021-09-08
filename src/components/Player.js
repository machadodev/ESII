import React from 'react';
import { Container, Col, ListGroup, Row } from 'react-bootstrap';
import PlayerIcon from './PlayerIcon';

function Player(props) {
  const { playerInfo } = props;

  return (
    <ListGroup.Item as="li" variant={playerInfo.color.variant}>
      {/* TODO: Add EstadoFederacao */}

      <Container>
        <Row>
          <Col>
            <PlayerIcon archetype={playerInfo.archetype} />
          </Col>
          <Col xs={10}> Exército {playerInfo.color.name}</Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

export default Player;
