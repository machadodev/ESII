import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import EstadoFederacao from './EstadoFederacao';
// import AttackStateSelector from './Attack/AttStateSelector';
import AttackDescription from './AttackDescription';

import {
  ESTADOS_DA_FEDERACAO,
  MAX_ARMIES_IN_ASSAULT,
  PLAYER_MATCH_INFO,
  TXT_BTN_ATTACK,
} from '../helper/CONSTANTS';
import ButtonAttack from './ButtonAttack';

function ModalAtacar() {
  // const { match } = props;
  const estadosInfo = [
    {
      estado: ESTADOS_DA_FEDERACAO.rj,
      exercitos: 3,
    },
    {
      estado: ESTADOS_DA_FEDERACAO.sp,
      exercitos: 4,
    },
    {
      estado: ESTADOS_DA_FEDERACAO.ba,
      exercitos: 10,
    },
    {
      estado: ESTADOS_DA_FEDERACAO.se,
      exercitos: 1,
    },
  ];

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [estadoInfoAtual, setEstadoInfoAtual] = useState(estadosInfo[0]);
  const [alvoAtual, setAlvo] = useState(
    ESTADOS_DA_FEDERACAO[estadoInfoAtual.estado.divisas[0]],
  );
  const [currentTroops, setTroops] = useState(estadoInfoAtual.exercitos - 1);
  const player = { id: 1, color: PLAYER_MATCH_INFO.red, archetype: 'human' };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const changeEstadoFederacaoPlayer = (eventkey) => {
    setEstadoInfoAtual(estadosInfo[eventkey]);
    setAlvo(ESTADOS_DA_FEDERACAO[estadoInfoAtual.estado.divisas[0]]);
    setTroops(estadoInfoAtual.exercitos - 1);
  };

  const changeAlvo = (eventkey) => {
    Object.entries(ESTADOS_DA_FEDERACAO).forEach(([key, estado]) => {
      if (eventkey === key) {
        setAlvo(estado);
      }
    });
  };

  const troopersList = (max) => {
    const armies = Math.min(MAX_ARMIES_IN_ASSAULT, max - 1);
    const els = [];
    for (let i = 0; i < armies; i += 1) {
      els.push(
        <Dropdown.Item key={i + 1} eventKey={i + 1}>
          {i + 1}
        </Dropdown.Item>,
      );
    }
    return els;
  };

  const changeCurrentTrooperCount = (eventKey) => {
    setTroops(eventKey);
  };

  return (
    <div>
      <Button
        key="btnAtacar"
        className="me-2"
        variant={player.color.variant}
        onClick={() => handleShow(true)}
      >
        Atacar
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Atacar!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AttackDescription playerInfo={player} />
          <Container>
            <Row>
              <Card className="col-4">
                <Card.Body>
                  <Card.Title>Selecionar Origem</Card.Title> <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    Selecionar origem do ataque.
                  </Card.Subtitle>
                  <br />
                  <DropdownButton
                    variant={player.color.variant}
                    title="Selecionar Tropas"
                    key={player.color.name}
                    onSelect={changeEstadoFederacaoPlayer}
                  >
                    {estadosInfo.map((estadoInfo, idx) => (
                      <Dropdown.Item key={estadoInfo.estado.id} eventKey={idx}>
                        {estadoInfo.estado.nome}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <br />
                  <EstadoFederacao
                    estadoInfo={estadoInfoAtual}
                    playerInfo={player}
                  />
                </Card.Body>
              </Card>
              <Card className="col-4">
                <Card.Body>
                  <Card.Title>Selecionar Selecionar Destino</Card.Title> <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    Indique qual estado deve ser atacado e com qual força. Você
                    pode atacar com até 3 tropas. Não será possível atacar se
                    houver apenas um exército em seu estado.
                  </Card.Subtitle>{' '}
                  <br />
                  <Row>
                    <Col>
                      <DropdownButton
                        variant={player.color.variant}
                        title="Selecionar Alvo"
                        key="alvo"
                        onSelect={changeAlvo}
                      >
                        {estadoInfoAtual.estado.divisas.map((divisa) => (
                          <Dropdown.Item key={divisa} eventKey={divisa}>
                            {`${ESTADOS_DA_FEDERACAO[divisa].sigla} - ${ESTADOS_DA_FEDERACAO[divisa].nome}`}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </Col>
                    <Col>
                      <h3>Atacar {alvoAtual.nome}</h3>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <DropdownButton
                        variant={player.color.variant}
                        title="Selecionar Força"
                        key="exercitos"
                        onSelect={changeCurrentTrooperCount}
                      >
                        {troopersList(estadoInfoAtual.exercitos)}
                      </DropdownButton>
                    </Col>
                    <Col>
                      <h3>Atacar com {currentTroops} exército(s)</h3>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="col-4">
                <Card.Body>
                  <Card.Title>Atacar</Card.Title> <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    Confirme suas escolhas e clique no botão `{TXT_BTN_ATTACK}`
                  </Card.Subtitle>{' '}
                  <br />
                  <ButtonAttack
                    variant={player.color.variant}
                    disabled={false}
                  />
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalAtacar;
