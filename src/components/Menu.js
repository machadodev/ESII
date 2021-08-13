import React from 'react'
import Card from 'react-bootstrap/Card'
import Logo from '../components/Logo'
import ButtonWAR from './ButtonWAR'
import PlayerSelector from './PlayerSelector'

function Menu () {
  return <div className="container">
    <div className="row">
      <div className="col-md-12" align="center">
        <Logo/>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
    {
          ['Primary', 'Success', 'Danger', 'Warning', 'Light', 'Dark'].map((variant, idx) => (
            <Card
              bg={variant.toLowerCase()}
              key={idx}
              className="col-4 mx-2 my-2 player-card"
            >
              <Card.Header style={{ color: variant === 'Light' ? 'black' : 'white' }}>Jogador {1 + idx}</Card.Header>
              <Card.Body>
            <PlayerSelector/>
              </Card.Body>
            </Card>
          ))
    }
    </div>

    <div className="row pt-4">
      <div className="col-md-12" align="center">
      <ButtonWAR text="Jogar"/>
      </div>
    </div>
   </div>
}

export default Menu