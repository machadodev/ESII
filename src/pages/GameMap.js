import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import GameManager from '../components/GameManager';
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

  return (
    <div className="wrapper">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="text-light">War 1 - Brasil</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="game-map-container">
        <Row className="h-100">
          <Col xs={3} className="sidebar">
            <nav>
              <GameManager match={match} />
            </nav>
          </Col>
          <Col xs={9} className="main" />
        </Row>
      </Container>
    </div>
  );
}

export default GameMap;
