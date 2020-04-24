import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Header from './components/header/Header'
import App from './App'

describe('App: unit test suite', () => {
  it('renders all components without crashing', () => {
    const appWrapper = shallow(<App />)

    expect(appWrapper.find(Header).length).toEqual(1)

    // other components here
  })

  it('renders App element with correct className', () => {
    expect(shallow(<App />).find('.App').length).toEqual(1)
  })

  it('renders with correct state', () => {
    const appWrapper = mount(<App />)

    const appState = {
      header: {
        titleText: "BETA Title",
        linkText: "link-to-somecoolplace"
      }
    }

    appWrapper.setState(appState)
    const headerNode = appWrapper.find(Header)

    expect(headerNode.length).toEqual(1)

    expect(headerNode.first().props().titleText).toEqual(appState.header.titleText)
    expect(headerNode.first().props().linkText).toEqual(appState.header.linkText)
  })
})
