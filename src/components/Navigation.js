// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import logo from './../icons/logo.svg'

// Import React-JSS
import injectSheet from 'react-jss'

// Create your Styles in Components
const styles = {
  containerNav: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    '& img': {
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: '3rem'
      },
      '@media (max-width: 768px)': {
        margin: 0
      }
    },
    '@media (max-width: 768px)': {
      justifyContent: 'center'
    }
  }
}
// Define the component using these styles and pass it the 'classes' prop.
// Use decoration for inject styles
@injectSheet(styles)
class Navigation extends Component {
  render () {
    const {classes} = this.props
    return (
      <div className={classes.containerNav}>
        <a href="/">
          <img src={logo} alt="chuckthetrooper logo"/>
        </a>
      </div>
    )
  }
}

export default Navigation
