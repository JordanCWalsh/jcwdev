import React from 'react'
import Header from './components/header/Header'
import './App.scss'

class App extends React.Component {
  /* future improvements
   * - !! deploy to Heroku to enable the Movies search page
   * - pull out hard-coded text into a markdown or json file
   * - offline mode with PWA modifications
   * - Dark Mode slider in Header to transform theme instantly
   */

  render() {
    return (
      <div className="App">
        <Header
          titleText="Title Goes Here"
          linkText="Learn React"
        />
      </div>
    )
  }
}

export default App
