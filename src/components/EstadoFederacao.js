import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import MapaEstado from './MapaEstado';

function EstadoFederacao(props) {
  const { estadoInfo, playerInfo } = props;

  return (
    <Card
      bg={playerInfo.color.variant}
      text={playerInfo.color.variant === 'light' ? 'dark' : 'white'}
      className="mb-2"
    >
      <Card.Header className="text-center">
        {`${estadoInfo.sigla} - ${estadoInfo.nome}`}
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={4}>
              <MapaEstado estado={estadoInfo} />
            </Col>
            <Col xs={8}>{estadoInfo.tropas} tropa(s)</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default EstadoFederacao;
