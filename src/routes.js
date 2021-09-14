import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import GameMap from './pages/GameMap';

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={GameMap} path="/game" />
  </BrowserRouter>
);

export default Routes;
