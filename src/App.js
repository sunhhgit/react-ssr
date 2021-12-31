import React from 'react'
import { createRouter } from './router'

class App extends React.Component{
  handleClick = e => {
    alert(e.target.innerHTML)
  }
  render() {
    // return <h1 onClick={this.handleClick}>This is just a demo !</h1>
    return createRouter('client')();
  }
}

export default App
