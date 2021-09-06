import React from 'react'
import ReactDOM from 'react-dom'
import './custom.scss'
import App from './App'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import GameMap from './pages/GameMap'

ReactDOM.render(
  <Router>
    <Switch>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      <Route exact path="/" component={ Home }/>,
      <Route exact path="/game" component={ GameMap }/>
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
