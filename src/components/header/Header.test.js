import React from 'react'
import { render, screen } from '@testing-library/react'
import logo from './logo.svg'
import Header from './Header'

test('renders title and link texts', () => {
  const { getByText } = render(
    <Header titleText="Title Goes Here" linkText="Learn React" />
  )
  const titleElement = getByText("Title Goes Here")
  const linkElement = getByText("Learn React")

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
