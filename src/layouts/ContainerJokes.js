// React
import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { observer } from 'mobx-react'

@observer
class result extends Component {
  render () {
    // Add some useful props from store
    const { results, state, query, error } = this.props.store
    // We manage state
    if (state === 'error') { //
      return (
        <div className="container-result">
          <h1>Request not working <br/>({error.message})</h1>
        </div>
      )
    } else if (state === null || state === 'pending') {
      return null
    } else {
      return (
        <div className="container-result">
          <h1>Result for «{ query }»</h1>
          <ul className="list-result">
            {results.map(item => (
              <a href={item.url} target="_blank" key={item.id}>
                <li className="item-result">
                  <div className="img-item-result">
                    <img src={item.icon_url} alt="" width="60" height="60"/>
                  </div>
                  <div className="content-item-result">
                    <p>{item.value}</p>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default result
