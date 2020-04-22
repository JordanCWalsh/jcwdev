import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './components/header/Header'
import App from './App'

it('renders all components', () => {
  render(<App />)

  // START HERE >>> expect(screen.getByClass('App-header')).toBeInTheDocument()
  // likely need to install Enzyme to do something like `expect(screen.get(Header)).toBeTruthy()`

  expect(screen.getByText('Learn React')).toBeInTheDocument()
})

it('renders child logo and linkText', () => {
  render(<App />)

  expect(screen.getByAltText(/reactjs logo: three elipsi surround a dot/i))
    .toBeInTheDocument()

  expect(screen.getByText('Learn React')).toBeInTheDocument()
})
