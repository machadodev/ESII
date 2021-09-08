const ESTADOS_DA_FEDERACAO = {
  UF: [
    {
      nome: 'Acre',
      sigla: 'AC',
      divisas: [''],
    },
    {
      nome: 'Alagoas',
      sigla: 'AL',
      divisas: [''],
    },
    {
      nome: 'Amapá',
      sigla: 'AP',
      divisas: [''],
    },
    {
      nome: 'Amazonas',
      sigla: 'AM',
      divisas: [''],
    },
    {
      nome: 'Bahia',
      sigla: 'BA',
      divisas: [''],
    },
    {
      nome: 'Ceará',
      sigla: 'CE',
      divisas: [''],
    },
    {
      nome: 'Distrito Federal',
      sigla: 'DF',
      divisas: [''],
    },
    {
      nome: 'Espírito Santo',
      sigla: 'ES',
      divisas: [''],
    },
    {
      nome: 'Goiás',
      sigla: 'GO',
      divisas: [''],
    },
    {
      nome: 'Maranhão',
      sigla: 'MA',
      divisas: [''],
    },
    {
      nome: 'Mato Grosso',
      sigla: 'MT',
      divisas: [''],
    },
    {
      nome: 'Mato Grosso do Sul',
      sigla: 'MS',
      divisas: [''],
    },
    {
      nome: 'Minas Gerais',
      sigla: 'MG',
      divisas: [''],
    },
    {
      nome: 'Pará',
      sigla: 'PA',
      divisas: [''],
    },
    {
      nome: 'Paraíba',
      sigla: 'PB',
      divisas: [''],
    },
    {
      nome: 'Paraná',
      sigla: 'PR',
      divisas: [''],
    },
    {
      nome: 'Pernambuco',
      sigla: 'PE',
      divisas: [''],
    },
    {
      nome: 'Piauí',
      sigla: 'PI',
      divisas: [''],
    },
    {
      nome: 'Rio de Janeiro',
      sigla: 'RJ',
      divisas: [''],
    },
    {
      nome: 'Rio Grande do Norte',
      sigla: 'RN',
      divisas: [''],
    },
    {
      nome: 'Rio Grande do Sul',
      sigla: 'RS',
      divisas: [''],
    },
    {
      nome: 'Rondônia',
      sigla: 'RO',
      divisas: [''],
    },
    {
      nome: 'Roraima',
      sigla: 'RR',
      divisas: [''],
    },
    {
      nome: 'Santa Catarina',
      sigla: 'SC',
      divisas: [''],
    },
    {
      nome: 'São Paulo',
      sigla: 'SP',
      divisas: [''],
    },
    {
      nome: 'Sergipe',
      sigla: 'SE',
      divisas: [''],
    },
    {
      nome: 'Tocantins',
      sigla: 'TO',
      divisas: [''],
    },
  ],
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

export {
  ESTADOS_DA_FEDERACAO,
  MAX_PLAYERS_IN_SESSION,
  MIN_PLAYERS_TO_START_GAME,
  PLAYER_MATCH_INFO,
};
