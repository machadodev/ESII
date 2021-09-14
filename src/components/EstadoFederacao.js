import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import MapaEstado from './MapaEstado';

function EstadoFederacao(props) {
  const { estadoInfo, playerInfo } = props;
  // TODO: Incluir dropdowns de soldados
  /*
  Faltam ainda incluir os dropdowns de quantos soldados podem ser tranferidos,
  e para onde.
  Quantos: alguma função calcula o quantos, provavelmente se comunica com
  o player, já que há mais de um estado
  Para onde: podemos pegar essa informação do array de divisas em
  ESTADOS_DA_FEDERACAO.ESTADOS_DA_FEDERACAO
  */
  return (
    <Card
      bg={playerInfo.color.variant}
      key={estadoInfo.estado.idEstado}
      text={playerInfo.color.variant === 'light' ? 'dark' : 'white'}
      className="mb-2"
    >
      <Card.Header className="text-center">
        {`${estadoInfo.estado.sigla} - ${estadoInfo.estado.nome}`}
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={4}>
              <MapaEstado estado={estadoInfo.estado} />
            </Col>
            <Col xs={8}>{`${estadoInfo.exercitos} Exércitos`}</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default EstadoFederacao;
