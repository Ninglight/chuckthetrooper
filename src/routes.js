// React
import React from 'react' // eslint-disable-line no-unused-vars
import { Switch, Route } from 'react-router-dom' // eslint-disable-line no-unused-vars

// Layouts
import Navigation from './components/Navigation' // eslint-disable-line no-unused-vars
import ContainerSearch from './layouts/ContainerSearch' // eslint-disable-line no-unused-vars
import ContainerResult from './layouts/ContainerResult' // eslint-disable-line no-unused-vars

const Home = () => (
  <div>
    <ContainerSearch />
  </div>
)

const Result = () => (
  <div>
    <ContainerSearch />
    <ContainerResult />
  </div>
)

const Main = () => ( // eslint-disable-line no-unused-vars
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search/:query' component={Result}/>
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
)

export default App
