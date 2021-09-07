import React from 'react';
import MapaBrasil from '../components/MapaBrasil';

function GameMap() {
  return (
    <div className="App">
      <section className="h-100">
        <header className="container h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column">
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
