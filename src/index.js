import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars
import { HashRouter } from 'react-router-dom' // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker' // eslint-disable-line no-unused-vars
import App from './routes' // eslint-disable-line no-unused-vars

import './scss/app.scss'

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
registerServiceWorker()
