import React from 'react'
import { render } from '@testing-library/react'
import ButtonWAR from './ButtonWAR'

test('Check if button has text', async () => {
  const { getByText } = await render(<ButtonWAR text="OK"/>)

  const button = getByText('OK')
  expect(button).toBeInTheDocument()
})
