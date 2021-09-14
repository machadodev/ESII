import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EstadoFederacao from './EstadoFederacao';
import { ESTADOS_DA_FEDERACAO, PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

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
  const [estadoFederacaoAtual, setEstado] = useState(estadosInfo[0]);
  const [alvoAtual, setAlvo] = useState(estadosInfo[0].estado.divisas[0]);
  const player = { id: 1, color: PLAYER_MATCH_INFO.red, archetype: 'human' };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const changeEstadoFederacaoPlayer = (eventkey) => {
    setEstado(estadosInfo[eventkey]);
  };

  const changeAlvo = (eventkey) => {
    setAlvo(estadoFederacaoAtual.estado.divisas[eventkey]);
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
          <p>Comandante, é hora do exercito {player.color.name} atacar!</p>
          <p>
            Selecione um dos seus estados, seu alvo, e quantas guarnições devem
            acatar suas ordens.
          </p>

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
            estadoInfo={estadoFederacaoAtual}
            playerInfo={player}
          />

          <DropdownButton
            variant={player.color.variant}
            title="Selecionar Alvo"
            key="alvo"
            onSelect={changeAlvo}
          >
            {estadoFederacaoAtual.estado.divisas.map((divisa, idx) => (
              <Dropdown.Item key={divisa} eventKey={idx}>
                {divisa}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <br />
          <h3>Atacar {alvoAtual}</h3>

          <DropdownButton
            variant={player.color.variant}
            title="Selecionar Força"
            key="exercitos"
            // onSelect={changeAlvo}
          >
            {estadoFederacaoAtual.estado.divisas.map((divisa, idx) => (
              <Dropdown.Item key={divisa} eventKey={idx}>
                {divisa}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <br />
          <h3>Com 10 exercitos</h3>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalAtacar;
