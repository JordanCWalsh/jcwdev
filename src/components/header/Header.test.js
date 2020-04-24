import React from 'react'
import { render, screen } from '@testing-library/react'
import logo from './logo.svg'
import Header from './Header'

test('renders title and link texts', () => {
  const { getByText } = render(
    <Header titleText="AWEsumsawce" linkText="Learn React Hooks" />
  )
  const titleElement = getByText("AWEsumsawce")
  const linkElement = getByText("Learn React Hooks")

  expect(titleElement).toBeInTheDocument()
  expect(linkElement).toBeInTheDocument()
})

test('renders the logo', () => {
  render(<Header titleText="Titled" linkText="linked" />)

  expect(screen.getByAltText(/reactjs logo: three elipsi surround a dot/i))
    .toBeInTheDocument()
})

// test('renders header elements', () => {
//
// });
