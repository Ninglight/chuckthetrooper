// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { observer } from 'mobx-react'

import injectSheet from 'react-jss'

import background from './images/chuckthetrooper.png'

// Layouts
import Navigation from './components/Navigation' // eslint-disable-line no-unused-vars
import ContainerSearch from './layouts/ContainerSearch' // eslint-disable-line no-unused-vars
import ContainerResult from './layouts/ContainerJokes' // eslint-disable-line no-unused-vars

import JokesStore from './JokesStore' // eslint-disable-line no-unused-vars

const store = new JokesStore()

// Create your Styles in Components
const styles = {
  app: {
    height: '100vh',
    width: '100%',
    background: 'white url(' + background + ') no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: 'contain',
    transition: 'background 100ms',
    '@media (max-width: 768px)': {
      backgroundSize: '60%'
    }
  }
}

@injectSheet(styles)
@observer
class App extends Component {
  render () {
    const {classes} = this.props
    return (
      <div className={ store.state === null ? classes.app : classes.app + 'background-empty' }>
        <Navigation />
        <ContainerSearch store={store}/>
        <ContainerResult store={store}/>
      </div>
    )
  }
}

export default App
