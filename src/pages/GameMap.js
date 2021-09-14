import React from 'react';
import GameManager from '../components/GameManager';
import MapaBrasil from '../components/MapaBrasil';
import ModalAtacar from '../components/ModalAtacar';
import { PLAYER_MATCH_INFO } from '../helper/CONSTANTS';

function GameMap() {
  const match = {
    players: [
      { id: 1, color: PLAYER_MATCH_INFO.red, archetype: 'human' },
      { id: 2, color: PLAYER_MATCH_INFO.green, archetype: 'ia' },
      { id: 3, color: PLAYER_MATCH_INFO.white, archetype: 'ia' },
    ],
  };

  return (
    <div className="App">
      <section className="h-100">
        <header className="container h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column">
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <h1 className="navbar-brand">War: Mapa do Brasil</h1>
                <ModalAtacar />
                <GameManager match={match} />
              </nav>
              <main className="content-wrapper">
                <div className="container-fluid">
                  <MapaBrasil />
                </div>
              </main>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default GameMap;
