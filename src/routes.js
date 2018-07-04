// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { observer } from 'mobx-react'

// Layouts
import Navigation from './components/Navigation' // eslint-disable-line no-unused-vars
import ContainerSearch from './layouts/ContainerSearch' // eslint-disable-line no-unused-vars
import ContainerResult from './layouts/ContainerJokes' // eslint-disable-line no-unused-vars

import JokesStore from './JokesStore' // eslint-disable-line no-unused-vars

const store = new JokesStore()

@observer
class app extends Component {
  render () {
    return (
      <div className={ store.state === null ? 'app' : 'app background-empty' }>
        <Navigation />
        <ContainerSearch store={store}/>
        <ContainerResult store={store}/>
      </div>
    )
  }
}

export default app
