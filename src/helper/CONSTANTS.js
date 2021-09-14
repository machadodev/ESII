import AC from '../assets/images/maps/ac.png';
import AL from '../assets/images/maps/al.png';
import AP from '../assets/images/maps/ap.png';
import AM from '../assets/images/maps/am.png';
import BA from '../assets/images/maps/ba.png';
import CE from '../assets/images/maps/ce.png';
import ES from '../assets/images/maps/es.png';
import GO from '../assets/images/maps/go.png';
import MA from '../assets/images/maps/ma.png';
import MT from '../assets/images/maps/mt.png';
import MS from '../assets/images/maps/ms.png';
import MG from '../assets/images/maps/mg.png';
import PA from '../assets/images/maps/pa.png';
import PB from '../assets/images/maps/pb.png';
import PR from '../assets/images/maps/pr.png';
import PE from '../assets/images/maps/pe.png';
import PI from '../assets/images/maps/pi.png';
import RJ from '../assets/images/maps/rj.png';
import RN from '../assets/images/maps/rn.png';
import RS from '../assets/images/maps/rs.png';
import RO from '../assets/images/maps/ro.png';
import RR from '../assets/images/maps/rr.png';
import SC from '../assets/images/maps/sc.png';
import SP from '../assets/images/maps/sp.png';
import SE from '../assets/images/maps/se.png';
import TO from '../assets/images/maps/to.png';

const ESTADOS_DA_FEDERACAO = {
  ac: {
    idEstado: 1,
    nome: 'Acre',
    sigla: 'AC',
    divisas: ['am', 'ro'],
    image: AC,
    regiao: 'norte',
  },
  al: {
    idEstado: 2,
    nome: 'Alagoas',
    sigla: 'AL',
    divisas: ['se', 'ba', 'pe'],
    image: AL,
    regiao: 'nordeste',
  },
  ap: {
    idEstado: 3,
    nome: 'Amapá',
    sigla: 'AP',
    divisas: ['pa'],
    image: AP,
    regiao: 'norte',
  },
  am: {
    idEstado: 4,
    nome: 'Amazonas',
    sigla: 'AM',
    divisas: ['ac', 'ro', 'mt', 'pa', 'rr'],
    image: AM,
    regiao: 'norte',
  },
  ba: {
    idEstado: 5,
    nome: 'Bahia',
    sigla: 'BA',
    divisas: ['pe', 'al', 'se', 'pi', 'to', 'go', 'mg', 'es'],
    image: BA,
    regiao: 'nordeste',
  },
  ce: {
    idEstado: 6,
    nome: 'Ceará',
    sigla: 'CE',
    divisas: ['rn', 'pb', 'pe', 'pi'],
    image: CE,
    regiao: 'nordeste',
  },
  es: {
    idEstado: 7,
    nome: 'Espírito Santo',
    sigla: 'ES',
    divisas: ['ba', 'mg', 'rj'],
    image: ES,
    regiao: 'sudeste',
  },
  go: {
    idEstado: 8,
    nome: 'Goiás',
    sigla: 'GO',
    divisas: ['mg', 'ba', 'to', 'mt', 'ms'],
    image: GO,
    regiao: 'centro-oeste',
  },
  ma: {
    idEstado: 9,
    nome: 'Maranhão',
    sigla: 'MA',
    divisas: ['pi', 'to', 'pa'],
    image: MA,
    regiao: 'nordeste',
  },
  mt: {
    idEstado: 10,
    nome: 'Mato Grosso',
    sigla: 'MT',
    divisas: ['go', 'ms', 'ro', 'pa', 'am', 'to'],
    image: MT,
    regiao: 'centro-oeste',
  },
  ms: {
    idEstado: 11,
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
    divisas: ['mt', 'go', 'sp', 'pr', 'mg'],
    image: MS,
    regiao: 'centro-oeste',
  },
  mg: {
    idEstado: 12,
    nome: 'Minas Gerais',
    sigla: 'MG',
    divisas: ['es', 'rj', 'sp', 'ba', 'go', 'ms'],
    image: MG,
    regiao: 'sudeste',
  },
  pa: {
    idEstado: 13,
    nome: 'Pará',
    sigla: 'PA',
    divisas: ['ap', 'rr', 'am', 'ma', 'to', 'mt'],
    image: PA,
    regiao: 'norte',
  },
  pb: {
    idEstado: 14,
    nome: 'Paraíba',
    sigla: 'PB',
    divisas: ['rn', 'ce', 'pe'],
    image: PB,
    regiao: 'nordeste',
  },
  pr: {
    idEstado: 15,
    nome: 'Paraná',
    sigla: 'PR',
    divisas: ['sc', 'sp', 'ms'],
    image: PR,
    regiao: 'sul',
  },
  pe: {
    idEstado: 16,
    nome: 'Pernambuco',
    sigla: 'PE',
    divisas: ['al', 'ba', 'pb', 'ce', 'pi'],
    image: PE,
    regiao: 'nordeste',
  },
  pi: {
    idEstado: 17,
    nome: 'Piauí',
    sigla: 'PI',
    divisas: ['ma', 'to', 'ba', 'ce', 'pe'],
    image: PI,
    regiao: 'nordeste',
  },
  rj: {
    idEstado: 18,
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    divisas: ['sp', 'mg', 'es'],
    image: RJ,
    regiao: 'sudeste',
  },
  rn: {
    idEstado: 19,
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    divisas: ['ce', 'pb'],
    image: RN,
    regiao: 'nordeste',
  },
  rs: {
    idEstado: 20,
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
    divisas: ['sc'],
    image: RS,
    regiao: 'sul',
  },
  ro: {
    idEstado: 21,
    nome: 'Rondônia',
    sigla: 'RO',
    divisas: ['am', 'mt'],
    image: RO,
    regiao: 'norte',
  },
  rr: {
    idEstado: 22,
    nome: 'Roraima',
    sigla: 'RR',
    divisas: ['am', 'pa'],
    image: RR,
    regiao: 'norte',
  },
  sc: {
    idEstado: 23,
    nome: 'Santa Catarina',
    sigla: 'SC',
    divisas: ['pr', 'rs'],
    image: SC,
    regiao: 'sul',
  },
  sp: {
    idEstado: 24,
    nome: 'São Paulo',
    sigla: 'SP',
    divisas: ['ms', 'pr', 'mg', 'rj'],
    image: SP,
    regiao: 'sudeste',
  },
  se: {
    idEstado: 25,
    nome: 'Sergipe',
    sigla: 'SE',
    divisas: ['al', 'ba'],
    image: SE,
    regiao: 'nordeste',
  },
  to: {
    idEstado: 26,
    nome: 'Tocantins',
    sigla: 'TO',
    divisas: ['pi', 'ba', 'ma', 'pa', 'mt', 'go'],
    image: TO,
    regiao: 'norte',
  },
};

const MAX_PLAYERS_IN_SESSION = 6;
const MIN_PLAYERS_TO_START_GAME = 3;
const INITIAL_NUMBER_OF_TROOPS = 1;

const ARCHETYPE = {
  ARTIFICIAL_INTELLIGENCE: {
    value: 'IA',
    label: 'IA',
  },
  HUMAN: {
    value: 'human',
    label: 'Humano',
  },
  NOT_PLAYABLE: {
    value: 'not_playable',
    label: 'Não Participa',
  },
};

const PLAYER_MATCH_INFO = {
  blue: {
    index: 0,
    name: 'Azul',
    variant: 'primary',
  },
  green: {
    index: 1,
    name: 'Verde',
    variant: 'success',
  },
  red: {
    index: 2,
    name: 'Vermelho',
    variant: 'danger',
  },
  yellow: {
    index: 3,
    name: 'Amarelo',
    variant: 'warning',
  },
  white: {
    index: 4,
    name: 'Branco',
    variant: 'light',
  },
  black: {
    index: 5,
    name: 'Preto',
    variant: 'secondary',
  },
};

export {
  ESTADOS_DA_FEDERACAO,
  MAX_PLAYERS_IN_SESSION,
  MIN_PLAYERS_TO_START_GAME,
  PLAYER_MATCH_INFO,
  ARCHETYPE,
  INITIAL_NUMBER_OF_TROOPS,
};
