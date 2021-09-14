import React from 'react';
import { Image } from 'react-bootstrap';
import ArtificialIntelligenceIcon from '../assets/images/icons/ai.png';
import HumanIcon from '../assets/images/icons/human.png';
import { ARCHETYPE } from '../helper/CONSTANTS';

const img = function imgTag(altText, srcPath) {
  return <Image alt={altText} src={srcPath} width="16px" />;
};

function PlayerIcon(props) {
  const { archetype } = props;
  if (archetype === ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value) return img('Inteligência Artificial', ArtificialIntelligenceIcon);
  return img('Jogador', HumanIcon);
}

export default PlayerIcon;
