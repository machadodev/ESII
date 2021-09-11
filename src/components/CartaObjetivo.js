import React from 'react';
import { Card } from 'react-bootstrap';
import imgCarta from '../assets/images/cards/carta_objetivo.png';

function CartaObjetivo(props) {
  const { objective } = props;
  return (
    <Card className="col-4 mx-2 my-2" style={{ width: '256px', margin: '50' }}>
      <Card.Img src={imgCarta} alt="Carta Objetivo" />
      <Card.ImgOverlay>
        <Card.Title className="text-center">{objective.title}</Card.Title>
        <hr />
        <Card.Text className="text-center">{objective.description}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CartaObjetivo;
