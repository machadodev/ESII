import React from 'react';
import uuid from 'react-uuid';
import Card from 'react-bootstrap/Card';
import Logo from './Logo';
import ButtonWAR from './ButtonWAR';
import PlayerSelector from './PlayerSelector';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Array(6),
    };
  }

  onChangeValueHandler = (id, value) => {
    const { players } = this.state;
    players[id - 1] = value;

    this.setState({ players });
  };

  canPlay({ players }) {
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

    return cnt >= 3 && hasHuman;
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
