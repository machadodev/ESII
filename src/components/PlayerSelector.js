import React from 'react';
import Select from 'react-select';

function PlayerSelector(props) {
  const { id, value, onChangeValue } = props;

  const onChange = (val) => {
    onChangeValue(id, val);
  };

  const options = [
    { value: 'nao_participa', label: 'Não Participa' },
    { value: 'humano', label: 'Humano' },
    { value: 'jogador_ia', label: 'IA' },
  ];

  return (
    <Select
      id="comboPlayer"
      inputProps={{ 'data-testid': 'contentInput' }}
      options={options}
      value={value}
      defaultValue={{ label: options[0].label, value: options[0].value }}
      onChange={onChange}
    />
  );
}

export default PlayerSelector;
