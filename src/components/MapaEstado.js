import React from 'react';
import { Image } from 'react-bootstrap';

function MapaEstado(props) {
  const { estado } = props;
  return <Image alt={estado.nome} src={estado.image} width="100px" />;
}

export default MapaEstado;
