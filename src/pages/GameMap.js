import { React, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import GameManager from '../components/GameManager';
import ModalAtacar from '../components/ModalAtacar';
import { PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

function GameMap(props) {
  const { players } = props.location.state;
  const parsedPlayers = [];

  players.forEach((player, index) => {
    parsedPlayers.push({
      id: index,
      color: Object.values(PLAYER_MATCH_INFO)[index],
      archetype: player.value,
    });
  });

  const match = {
    players: parsedPlayers,
  };

  const [bgNavBarColor, SetBgNavBarColor] = useState('dark');

  const changeNavbarColorHandler = (color) => {
    SetBgNavBarColor(color.variant);
  };

  return (
    <div className="wrapper">
      <Navbar bg={bgNavBarColor} variant="dark" key={bgNavBarColor}>
        <Container>
          <ModalAtacar />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="text-light">War 1 - Brasil</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="game-map-container">
        <Row className="h-100">
          <Col xs={3} className="sidebar">
            <nav>
              <GameManager
                match={match}
                onPlayerTurn={changeNavbarColorHandler}
              />
            </nav>
          </Col>
          <Col xs={9} className="main" />
        </Row>
      </Container>
    </div>
  );
}

export default GameMap;
