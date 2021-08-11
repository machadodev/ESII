import React from 'react'
import Select from 'react-select'

function PlayerSelector () {
  const options = [
    { value: 'nao_participa', label: 'Não Participa' },
    { value: 'humano', label: 'Humano' },
    { value: 'jogador_ia', label: 'IA' }
  ]
  const [player, setColor] = React.useState(options[0])
  return (
      <Select
        id="comboPlayer"
        inputProps={{ 'data-testid': 'contentInput' }}
        options={options}
        value={player}
        onChange={(value) => {
          console.log(value)
          setColor(value)
        }}
      />
  )
}

export default PlayerSelector
