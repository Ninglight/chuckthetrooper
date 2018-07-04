// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import logo from './../icons/logo.svg'

class navigation extends Component {
  render () {
    return (
      <div className="container-nav">
        <a href="/">
          <img src={logo} alt="chuckthetrooper logo"/>
        </a>
      </div>
    )
  }
}

export default navigation
