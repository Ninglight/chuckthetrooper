// import from React
import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars
import {HashRouter} from 'react-router-dom' // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker' // eslint-disable-line no-unused-vars
import App from './routes' // eslint-disable-line no-unused-vars

// import styles
import './scss/app.scss'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
registerServiceWorker()
