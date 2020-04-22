import React from 'react'
import logo from './logo.svg'

const Header = (props) => {
  return(
    <header className="App-header">
      <h2>{props.titleText}</h2>
      <img
        src={logo}
        className="App-logo"
        alt="reactjs logo: three elipsi surround a dot" 
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.linkText}
      </a>
    </header>
  )
}

export default Header
