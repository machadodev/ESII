import React from 'react';
import Select from 'react-select';
import { ARCHETYPE } from '../helper/CONSTANTS';

function PlayerSelector(props) {
  const { id, value, onChangeValue } = props;

  const onChange = (val) => {
    onChangeValue(id, val);
  };

  const options = [
    {
      value: ARCHETYPE.NOT_PLAYABLE.value,
      label: ARCHETYPE.NOT_PLAYABLE.label,
    },
    { value: ARCHETYPE.HUMAN.value, label: ARCHETYPE.HUMAN.label },
    {
      value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value,
      label: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.label,
    },
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
