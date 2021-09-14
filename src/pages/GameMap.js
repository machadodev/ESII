import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import GameManager from '../components/GameManager';
// import MapaBrasil from '../components/MapaBrasil';
import { PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

function GameMap() {
  const match = {
    players: [
      { id: 1, color: PLAYER_MATCH_INFO.red, archetype: 'human' },
      { id: 2, color: PLAYER_MATCH_INFO.green, archetype: 'ia' },
      { id: 3, color: PLAYER_MATCH_INFO.black, archetype: 'ia' },
      { id: 4, color: PLAYER_MATCH_INFO.blue, archetype: 'ia' },
      { id: 5, color: PLAYER_MATCH_INFO.yellow, archetype: 'ia' },
    ],
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
