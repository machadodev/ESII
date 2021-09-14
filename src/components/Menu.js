import React from 'react';
import uuid from 'react-uuid';
import Card from 'react-bootstrap/Card';
import Logo from './Logo';
import ButtonWAR from './ButtonWAR';
import PlayerSelector from './PlayerSelector';
import {
  MAX_PLAYERS_IN_SESSION,
  MIN_PLAYERS_TO_START_GAME,
} from '../helper/CONSTANTS';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Array(MAX_PLAYERS_IN_SESSION),
    };
  }

  validatePlayerSelection = (id, value) => {
    const validValues = ['humano', 'jogador_ia', 'nao_participa'];

    if (!id) {
      throw Error('id cannot be null');
    }

    if (!value) {
      throw Error('value cannot be null');
    }

    if (id < 1 || id > MAX_PLAYERS_IN_SESSION) {
      throw Error('id cannot be out of range');
    }

    if (!Number.isInteger(id)) {
      throw Error('id cannot be NaN');
    }

    if (!validValues.includes(value)) {
      throw Error('value is not on the domain');
    }
  };

  onChangeValueHandler = (id, value) => {
    this.validatePlayerSelection(id, value);

    const { players } = this.state;

    players[id - 1] = value;

    this.setState({ players });
  };

  canPlay(props) {
    if (!props) {
      throw Error('props cannot be null');
    }

    const { players } = props;

    let hasHuman = false;
    let cnt = 0;

    players.forEach((player) => {
      const type = player.value;

      if (type === 'humano') {
        hasHuman = true;
        cnt += 1;
      } else if (type === 'jogador_ia') {
        cnt += 1;
      }
    });

    return (
      cnt >= MIN_PLAYERS_TO_START_GAME
      && cnt <= MAX_PLAYERS_IN_SESSION
      && hasHuman
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12" align="center">
            <Logo />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {['Primary', 'Success', 'Danger', 'Warning', 'Light', 'Dark'].map(
            (variant, idx) => (
              <Card
                bg={variant.toLowerCase()}
                key={uuid()}
                className="col-4 mx-2 my-2 player-card"
              >
                <Card.Header
                  style={{ color: variant === 'Light' ? 'black' : 'white' }}
                >
                  Jogador {1 + idx}
                </Card.Header>
                <Card.Body>
                  <PlayerSelector
                    id={1 + idx}
                    value={this.state.players[idx]}
                    onChangeValue={this.onChangeValueHandler}
                  />
                </Card.Body>
              </Card>
            ),
          )}
        </div>

        <div className="row pt-4">
          <div className="col-md-12" align="center">
            <ButtonWAR text="Jogar" disabled={!this.canPlay(this.state)} />
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
