import { React, useState } from 'react';
import Select from 'react-select';
import { Card, Container, Col, Row } from 'react-bootstrap';
import MapaEstado from './MapaEstado';

function EstadoFederacao(props) {
  const [selectedOption, setSelectedOption] = useState(1);
  const { estadoInfo, playerInfo } = props;

  const options = [];
  for (let i = 0; i < playerInfo.exercitos + 1; i += 1) {
    options.push({
      value: i + 1,
      label: `${i + 1}`,
    });
  }

  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <Card
      bg={playerInfo.color.variant}
      text={playerInfo.color.variant === 'light' ? 'dark' : 'white'}
      className="mb-2"
    >
      <Card.Header className="text-center">
        {`${estadoInfo.sigla} - ${estadoInfo.nome}`}
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={4}>
              <MapaEstado estado={estadoInfo} />
            </Col>
            <Col xs={8}>
              <Select
                id="comboTropa"
                options={options}
                isDisabled={!playerInfo.turno}
                value={options.filter(
                  (option) => option.value === selectedOption,
                )}
                defaultValue={{
                  label: options[0].label,
                  value: options[0].value,
                }}
                onChange={handleTypeSelect}
              />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default EstadoFederacao;
