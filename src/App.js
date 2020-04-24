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
  constructor(props) {
    super(props)

    this.state = {
      header: {
        titleText: "Title Goes Here",
        linkText: "Learn React"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          titleText={this.state.header.titleText}
          linkText={this.state.header.linkText}
        />
      </div>
    )
  }
}

export default App
