import React from 'react';
import Menu from '../components/Menu';

function Home() {
  return (
    <div className="App">
      <section className="h-100">
        <header className="container h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column">
              <Menu />
            </div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Home;
