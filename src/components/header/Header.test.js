import React from 'react'
import { render, screen } from '@testing-library/react'
import logo from './logo.svg'
import Header from './Header'

it('renders title and link texts', () => {
  const { getByText } = render(
    <Header titleText="Title Goes Here" linkText="Learn React" />
  )
  const titleElement = getByText("Title Goes Here")
  const linkElement = getByText("Learn React")

  expect(titleElement).toBeInTheDocument()
  expect(linkElement).toBeInTheDocument()
})

// it('renders the logo', () => {
//   const { getByText } = render(
//     <Header titleText="Titled" linkText="linked" />
//   )
//   const titleElement = getByText("Title Goes Here")
//
//   expect(titleElement).toBeInTheDocument()
// })

// it('renders header elements', () => {});
