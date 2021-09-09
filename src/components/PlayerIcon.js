import React from 'react';
import { Image } from 'react-bootstrap';
import ai from '../assets/images/icons/ai.png';
import human from '../assets/images/icons/human.png';

const img = function imgTag(altText, srcPath) {
  return <Image alt={altText} src={srcPath} width="16px" />;
};

function PlayerIcon(props) {
  const { archetype } = props;
  if (archetype === 'ai') return img('Inteligência Artificial', ai);
  return img('Jogador', human);
}

export default PlayerIcon;
