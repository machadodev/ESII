import React from 'react';
import { Container, Col, ListGroup, Row } from 'react-bootstrap';
import PlayerIcon from './PlayerIcon';
import { ESTADOS_DA_FEDERACAO } from '../helper/CONSTANTS';
import EstadoFederacao from './EstadoFederacao';

function Player(props) {
  const { playerInfo } = props;
  // TODO: estadosInfo deve vir via props
  /*
    Este dado deve ser servido pelo GameManager, deve ser responsabilidade
    dele gerenciar estes dados, pois é ele quem vai  manipular as operações
    de aquisição ou perda de estados
  */
  const estadosInfo = [
    {
      estado: ESTADOS_DA_FEDERACAO.rj,
      exercitos: 3,
    },
    {
      estado: ESTADOS_DA_FEDERACAO.sp,
      exercitos: 4,
    },
  ];
  return (
    <ListGroup.Item as="li" variant={playerInfo.color.variant}>
      <Container>
        <Row>
          <Col>
            <PlayerIcon archetype={playerInfo.archetype} />
          </Col>
          <Col xs={10}> Exército {playerInfo.color.name}</Col>
          {estadosInfo.map((estadoInfo) => (
            <EstadoFederacao
              estadoInfo={estadoInfo}
              playerInfo={playerInfo}
              key={estadoInfo.estado.idEstado}
            />
          ))}
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

export default Player;
