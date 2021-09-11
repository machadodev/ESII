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
// TODO: se forem utilizar estas divisas, falta preencher
// Eu acho prático

const ESTADOS_DA_FEDERACAO = {
  ac: {
    idEstado: 1,
    nome: 'Acre',
    sigla: 'AC',
    divisas: ['am'],
    image: AC,
  },
  al: {
    idEstado: 2,
    nome: 'Alagoas',
    sigla: 'AL',
    divisas: ['se', 'ba', 'pe'],
    image: AL,
  },
  ap: {
    idEstado: 3,
    nome: 'Amapá',
    sigla: 'AP',
    divisas: [''],
    image: AP,
  },
  am: {
    idEstado: 4,
    nome: 'Amazonas',
    sigla: 'AM',
    divisas: [''],
    image: AM,
  },
  ba: {
    idEstado: 5,
    nome: 'Bahia',
    sigla: 'BA',
    divisas: [''],
    image: BA,
  },
  ce: {
    idEstado: 6,
    nome: 'Ceará',
    sigla: 'CE',
    divisas: [''],
    image: CE,
  },
  es: {
    idEstado: 8,
    nome: 'Espírito Santo',
    sigla: 'ES',
    divisas: [''],
    image: ES,
  },
  go: {
    idEstado: 9,
    nome: 'Goiás',
    sigla: 'GO',
    divisas: [''],
    image: GO,
  },
  ma: {
    idEstado: 10,
    nome: 'Maranhão',
    sigla: 'MA',
    divisas: [''],
    image: MA,
  },
  mt: {
    idEstado: 11,
    nome: 'Mato Grosso',
    sigla: 'MT',
    divisas: [''],
    image: MT,
  },
  ms: {
    idEstado: 12,
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
    divisas: [''],
    image: MS,
  },
  mg: {
    idEstado: 13,
    nome: 'Minas Gerais',
    sigla: 'MG',
    divisas: [''],
    image: MG,
  },
  pa: {
    idEstado: 14,
    nome: 'Pará',
    sigla: 'PA',
    divisas: [''],
    image: PA,
  },
  pb: {
    idEstado: 15,
    nome: 'Paraíba',
    sigla: 'PB',
    divisas: [''],
    image: PB,
  },
  pr: {
    idEstado: 16,
    nome: 'Paraná',
    sigla: 'PR',
    divisas: [''],
    image: PR,
  },
  pe: {
    idEstado: 17,
    nome: 'Pernambuco',
    sigla: 'PE',
    divisas: [''],
    image: PE,
  },
  pi: {
    idEstado: 18,
    nome: 'Piauí',
    sigla: 'PI',
    divisas: [''],
    image: PI,
  },
  rj: {
    idEstado: 19,
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    divisas: [''],
    image: RJ,
  },
  rn: {
    idEstado: 20,
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    divisas: [''],
    image: RN,
  },
  rs: {
    idEstado: 21,
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
    divisas: [''],
    image: RS,
  },
  ro: {
    idEstado: 22,
    nome: 'Rondônia',
    sigla: 'RO',
    divisas: [''],
    image: RO,
  },
  rr: {
    idEstado: 23,
    nome: 'Roraima',
    sigla: 'RR',
    divisas: [''],
    image: RR,
  },
  sc: {
    idEstado: 24,
    nome: 'Santa Catarina',
    sigla: 'SC',
    divisas: [''],
    image: SC,
  },
  sp: {
    idEstado: 25,
    nome: 'São Paulo',
    sigla: 'SP',
    divisas: [''],
    image: SP,
  },
  se: {
    idEstado: 26,
    nome: 'Sergipe',
    sigla: 'SE',
    divisas: [''],
    image: SE,
  },
  to: {
    idEstado: 27,
    nome: 'Tocantins',
    sigla: 'TO',
    divisas: [''],
    image: TO,
  },
};

const MAX_PLAYERS_IN_SESSION = 6;
const MIN_PLAYERS_TO_START_GAME = 3;

const PLAYER_MATCH_INFO = {
  blue: {
    index: 0,
    name: 'Azul',
    variant: 'primary',
  },
  black: {
    index: 1,
    name: 'Preto',
    variant: 'secondary',
  },
  green: {
    index: 2,
    name: 'Verde',
    variant: 'success',
  },
  red: {
    index: 3,
    name: 'Vermelho',
    variant: 'danger',
  },
  yellow: {
    index: 4,
    name: 'Amarelo',
    variant: 'warning',
  },
  white: {
    index: 5,
    name: 'Branco',
    variant: 'light',
  },
};

const OBJECTIVES = {
  sul: {
    title: 'Consquistar o Sul',
    description: 'Dominar todos os estados da região Sul do Brasil.',
  },
  litoral: {
    title: 'Conquistar o Litoral',
    description: 'Dominar pelo menos 6 estados do litoral brasileiro.',
  },
  floresta: {
    title: 'Conquistar a Floresta',
    description: 'Dominar os estados do Amazonas, Pará, Acre e Mato Grosso.',
  },
};

export {
  ESTADOS_DA_FEDERACAO,
  MAX_PLAYERS_IN_SESSION,
  MIN_PLAYERS_TO_START_GAME,
  PLAYER_MATCH_INFO,
  OBJECTIVES,
};
