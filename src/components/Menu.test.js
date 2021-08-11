import React from 'react'
import { render } from '@testing-library/react'
import Menu from './Menu'

test('teasd qwe sda', async () => {
  const { getByAltText } = await render(<Menu />)

  const image = getByAltText('logo')
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', 'logo.png')
})
